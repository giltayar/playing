'use strict'
const yargs = require('yargs')

async function main(argv, {shouldExitOnError = false} = {}) {
  const commandLineOptions = yargs
    .exitProcess(shouldExitOnError)
    .strict()
    .help()

  commandLineOptions
    .command(require('./async-performance'))
    .help()
    .parse(argv)
}

module.exports = main
