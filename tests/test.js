const docgen = require('../index');

docgen.generate(`${__dirname}/fixtures/`, `${__dirname}/fixtures/`, [{ input: 'class.js', output: 'class.md' }] );
