'use strict'
const yargs = require('yargs')

async function main(argv, {shouldExitOnError = false} = {}) {
  const commandLineOptions = yargs
    .exitProcess(shouldExitOnError)
    .strict()
    .help()

  const options = commandLineOptions.parse(argv)
  console.log(options)
}

module.exports = main
