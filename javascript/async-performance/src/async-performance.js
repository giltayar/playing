'use strict'
const yargs = require('yargs')

async function main(argv, {shouldExitOnError = false} = {}) {
  const commandLineOptions = yargs
    .exitProcess(shouldExitOnError)
    .strict()
    .options({
      runs: {
        alias: 'r',
        describe: 'number of runs',
        default: 3,
        number: true,
      },
      count: {
        alias: 'c',
        describe: 'number of tasks to run in parallel',
        default: 10,
        number: true,
      },
      throttle: {
        alias: 't',
        describe: 'throttle maximum',
        default: 0,
        number: true,
      },
      verbose: {
        alias: 'v',
        describe: 'print all erros (-vv is print all results)',
        boolean: true,
        count: true,
      },
    })
    .command(require('./resolved-promises'))
    .command(require('./fetch'))
    .command(require('./http'))
    .help()

  commandLineOptions.parse(argv)
}

module.exports = main
