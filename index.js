var child_process = require('child_process');
const args=process.argv.slice(2);
const fileName=args[0];
const ext=args[1];
const indicator=args[2];
const qty=args[3];

child_process.exec(`node file.js ${fileName} ${ext} ${indicator} ${qty}`, (error, stdout, stderr) => {
    console.log(`${stdout}`);
    console.log(`${stderr}`);

    
    if (error !== null) {
        console.log(`exec error: ${error}`);
    }
});

