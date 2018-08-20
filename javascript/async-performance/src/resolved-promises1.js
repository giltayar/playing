'use strict'
const taskPumper = require('./task-pumper')

module.exports = {
  command: 'resolved-promises',
  describe: 'already resolved promises',
  aliases: [],
  builder: {
    timeout: {
      default: 0
    }
  },
  handler: {
    taskPumper()
  }
}