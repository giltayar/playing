const fs = require('fs')
const {promisify} = require('util')

const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

readFilePromise('source.txt')
  .then(content => writeFilePromise('target.txt', content))
  .then(() => console.log('done'))
