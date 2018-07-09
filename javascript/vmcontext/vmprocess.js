const vm = require('vm')

// process.on('exit', () => console.log('parent lalala'))

vm.runInNewContext("let end = false; process.on('beforeExit', () => { if (end) return; end = true; console.log('asdfasdf'); require('fs').readFile(__filename, 'utf-8', (err, value) => console.log('xxx', err, value)) })", {process, console, require, __filename})

//let end = false; process.on('beforeExit', () => { if (end) return end = true; console.log('asdfasdf'); require('fs').readFile(__filename, 'utf-8', (err, value) => console.log('xxx', err, value)) })
