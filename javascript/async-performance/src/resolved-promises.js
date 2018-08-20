'use strict'
const {promisify: p} = require('util')
const taskPumper = require('./task-pumper')

module.exports = {
  command: 'resolved-promises',
  describe: 'run a batch of resolved promises with optional timeout',
  builder: {
    timeout: {
      default: 0,
      number: true,
    },
  },
  handler: argv => {
    taskPumper({
      ...argv,
      taskName: 'resolved-promises',
      task: async () => {
        if (argv.timeout) await p(setTimeout)(argv.timeout)
      },
    })
  },
}
