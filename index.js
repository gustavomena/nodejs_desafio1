var child_process = require('child_process');
var file_obj = require('fs');

//EXECUTE yourExternalJsFile.js
child_process.exec('node index.js', (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});