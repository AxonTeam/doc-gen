const jsdocParse = require('jsdoc-parse');
const jsdocApi = require('jsdoc-api');
const dmd = require('dmd');

function format(data, files) {
    return data?.map( (b) => {
        if (b.type) {
            b.type.names = b.type.names.map( (c) => {
                files.forEach(d => {
                    const output = d.output.replace('.md', '').split('/');
                    const last = output[output.length - 1];
                    c = c.replace(new RegExp(`${last}(?![A-Za-z])`, 'g'), `[${last}](${output.join('/')})`);
                } );
                return c;
            } ) || b.type.names;
        }
        return b;
    } ) || data;
}

class Generator {
    constructor(inputBase) {
        this.base = inputBase;
    }

    render(path, files) {
        const options = { files: `${this.base}${path}` };
		
        return this.getTemplateData(options)
            .then(templateData => {
                templateData.map( (a) => {
                    a.params = format(a.params, files);
                    a.returns = format(a.returns, files);
                    a.properties = format(a.properties, files);
                    return a;
                } );
                return dmd.async(templateData, options);
            } );
    }
	
    getTemplateData(options) {
        return this.getJsdocData(options)
            .then(jsdocParse);
    }
    
    getJsdocData(options) {
        const jsdocOptions = Object.assign( { cache: true }, options);
        return jsdocApi.explain(jsdocOptions);
    }
}

module.exports = Generator;
