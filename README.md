# doc-gen

This project is a somewhat copy of [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown). It uses the same packages but edit some part to work as a custom solution for our needs.

This is a very light version of jsdoc-to-markdown.

The main method: `generate` takes 3 arguments:
- The base input path (source location).
- The base output path (docs location).
- An options array. This array represent the association of `input -> output` for every file that need to be generated. You need to provide the full path (besides the base path).
