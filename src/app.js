#!/usr/bin/env node
const fs = require('fs-extra');
const homedir = require('os').homedir();
// load proxy
fs.readFile(homedir+'/.termproxy', 'utf-8').then(data => {
    console.log('Using proxy: ' + data);
    if (data.length > 0) {
        let argv = process.argv;
        if (argv.length > 2) { // append commands
            let commands = '';
            for (let i = 2; i < argv.length; i++) {
                commands += ' ' + argv[i];
            }
            // check platform
            const platformName = process.platform;
            let scriptAccordingToPlatform = null;
            if (platformName === 'darwin' || platformName === 'linux') { // use bash if running on macOS or Linux
                scriptAccordingToPlatform = "bash ./src/proxy.sh";
            } else if (platformName === 'win32') { // use Batch script if running on Windows
                scriptAccordingToPlatform = __dirname+'/proxy.bat';
            } else { // end it if unsupported platform found.
                console.log('unsupported platform: ' + platformName);
                return;
            }
            // run script according T=to platform with commands
            const exec = require('child_process').exec;
            exec(scriptAccordingToPlatform + commands,
                (error, stdout, stderr) => {
                    console.log(`${stdout}`);
                    console.log(`${stderr}`);
                    if (error !== null) {
                        console.log(`exec error: ${error}`);
                    }
                });
        } else {
            console.log('No command provided');
            console.log('Use this tool like this:');
            console.log('termproxy <YOUR_COMMANDS>');
            hintHelp();
        }
    } else {
        return Promise.reject('no data');
    }
}).catch(() => {
    console.log('Error: Load proxy failed!');
    console.log('You should set proxy before using this tool:');
    console.log('termproxy-set <YOUR_PROXY_URL>');
    hintHelp();
});

function hintHelp() {
    console.log('Or find help:');
    console.log('termproxy-help');
}

