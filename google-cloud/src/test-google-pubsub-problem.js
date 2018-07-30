'use strict'
const yargs = require('yargs')
const listener = require('./listener')
const pushMessage = require('./push-message')

async function main(argv, {shouldExitOnError = false} = {}) {
  const commandLineOptions = yargs
    .exitProcess(shouldExitOnError)
    .option('e', {
      description: 'environment',
      alias: 'env',
    })
    .option('l', {
      description: 'pull messages and echo',
      boolean: true,
      alias: 'listen',
    })
    .option('m', {
      description: 'push message',
      alias: 'message',
    })
    .option('p', {
      description: 'project id',
      alias: 'project',
      default: 'rendering-grid',
    })
    .option('w', {
      description: 'job time in seconds',
      alias: 'wait',
      number: true,
      default: 10,
    })
    .option('c', {
      description: '# of messages to push or pull',
      alias: 'count',
      default: '10',
    })
    .strict()
    .help()

  const {env, listen, message, count, wait, project} = commandLineOptions.parse(argv)

  if (listen) {
    await listener(env, project, count, wait)
  } else if (message) {
    await pushMessage(env, project, message, count)
  }
}

module.exports = main
