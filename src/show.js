#!/usr/bin/env node
const fs = require('fs-extra');
fs.readFile('./proxy', 'utf-8').then(data => {
    if (data.length > 0) {
        console.log('proxy: ' + data);
    }else{
        return Promise.reject('no proxy');
    }
}).catch(() => {
    console.log('Error: Load proxy failed!');
    console.log('You should set proxy before using this tool:');
    console.log('termproxy-set <YOUR_PROXY_URL>');
    console.log('Or checkout the help:');
    console.log('termproxy-help');
});
