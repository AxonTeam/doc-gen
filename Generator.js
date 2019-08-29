const jsdocParse = require('jsdoc-parse');
const jsdocApi = require('jsdoc-api');
const dmd = require('dmd');

class Generator {
    constructor(inputBase) {
        this.base = inputBase;
    }

    render(path) {
        const options = { files: `${this.base}${path}` };
		
        return this.getTemplateData(options)
            .then(templateData => dmd.async(templateData, options) );
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
