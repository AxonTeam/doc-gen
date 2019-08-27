const jsdocParse = require('jsdoc-parse');
const jsdocApi = require('jsdoc-api');
const dmd = require('dmd');

const DmdOptions = require('./lib/dmd-options');
const JsdocOptions = require('./lib/jsdoc-options');

class Generator {
    render(path) {
        const dmdOptions = new DmdOptions( {} );
		
        return this.getTemplateData(options)
            .then(templateData => dmd.async(templateData, dmdOptions) );
    }
	
    /**
   * Returns the template data (jsdoc-parse output) which is fed into the output template (dmd).
   *
   * @param [options] {object} - Identical options to {@link module:jsdoc-to-markdown#getJsdocData}.
   * @return {Promise}
   * @fulfil {object[]} - the json data
   * @category async
   */
    getTemplateData(options) {
        return this.getJsdocData(options)
            .then(jsdocParse);
    }
	
    /**
   * Returns raw data direct from the underlying [jsdoc3](https://github.com/jsdoc3/jsdoc).
   *
   * @param [options] {object} - the options
   * @param [options.no-cache] {boolean} - By default results are cached to speed up repeat invocations. Set to true to disable this.
   * @param [options.files] {string|string[]} - One or more filenames to process. Accepts globs (e.g. `*.js`). Either `files`, `source` or `data` must be supplied.
   * @param [options.source] {string} - A string containing source code to process. Either `files`, `source` or `data` must be supplied.
   * @param [options.configure] {string} - The path to the [jsdoc configuration file](http://usejsdoc.org/about-configuring-jsdoc.html). Default: path/to/jsdoc/conf.json.
   * @return {Promise}
   * @fulfil {object[]}
   * @category async
   */
    getJsdocData(options) {
        const jsdocOptions = new JsdocOptions(options);
        return jsdocApi.explain(jsdocOptions);
    }
}

module.exports = new Generator();
