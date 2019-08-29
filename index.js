const Generator = require('./Generator');
const Writer = require('./Writer');

/* options =
[
    {
        "input": "path",
        "output": "path"
    }
]
*/

exports.generate = async function generate(inputBase, outputBase, options) {
    const generator = new Generator(inputBase);
    const writer = new Writer(outputBase);
    
    for (const elem of options) {
        try {
            const data = await generator.render(elem.input);
            await writer.write(elem.output, data);
        } catch (err) {
            console.error(`ERROR while generating doc for ${elem.output}. Error:\n${err.stack}`);
        }
        console.log(`> ${elem.input} - Doc successfully generated.`);
    }

    return;
};
