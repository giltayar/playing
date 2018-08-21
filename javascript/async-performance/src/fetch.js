'use strict'
const {promisify: p} = require('util')
const fetch = require('node-fetch')
const retry = require('p-retry')
const taskPumper = require('./task-pumper')
const runServer = require('./run-server')

module.exports = {
  command: 'fetch',
  describe: 'fetch from a file server',
  builder: {
    timeout: {
      default: 0,
      number: true,
    },
    url: {
      string: true,
    },
    body: {
      boolean: true,
      default: true,
    },
  },
  handler: async argv => {
    const {server, address} = argv.url ? {} : await runServer(argv)
    const url = argv.url || `${address}/ok`

    await taskPumper({
      ...argv,
      taskName: 'fetch',
      task: async ({runIndex, taskIndex}) => {
        return await retry(
          async () => {
            const response = await fetch(
              `${url}${url.includes('?') ? '&' : '?'}task=${runIndex}.${taskIndex}`,
            )

            if (!response.ok)
              throw new Error(`bad response: ${response.status} (${await response.text()})`)

            return argv.body ? await response.buffer() : '<no body>'
          },
          {minTimeout: 100, maxTimeout: 100, retries: 10},
        )
      },
    })

    if (server) await p(server.close.bind(server))()
  },
}
