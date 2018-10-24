#!/usr/bin/env node
const fs = require('fs-extra');
const homedir = require('os').homedir();
let proxy = "";
if (process.argv.length > 2) {
    proxy = process.argv[2];
}
fs.writeFile(homedir+'/.termproxy', proxy, 'utf-8').then(() => {
    console.log('proxy set: ' + proxy);
}).catch(err => console.error(err));