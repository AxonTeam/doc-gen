const Generator = require('./Generator');

/* options =
[
    {
        "input": "path",
        "output": "path"
    }
]
*/

function main(options) {
    const generator = new Generator();
    for (const elem of options) {
        generator.render(elem.input);
        // write resulte in correct file elem.output
    }
// run doc gen for every input / output
}
