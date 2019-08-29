const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

class Writer {
    constructor(outputBase) {
        this.base = outputBase;
    }

    write(path, data) {
        return writeFileAsync(`${this.base}${path}`, data, 'utf8');
    }
}

module.exports = Writer;
