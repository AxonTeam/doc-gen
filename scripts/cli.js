#!/usr/bin/env node
const docgen = require('../index');

const [
    ,, ...args
] = process.argv;

docgen.generate(`${process.cwd()}/`, `${process.cwd()}/`, [{ input: args[0], output: args[1] }] );
