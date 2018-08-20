'use strict'
const {promisify: p} = require('util')
const http = require('http')
const https = require('https')
const retry = require('p-retry')
const taskPumper = require('./task-pumper')
const runServer = require('./run-server')

module.exports = {
  command: 'http',
  describe: 'fetch from a file server using low-level http',
  builder: {
    timeout: {
      default: 0,
      number: true,
    },
    url: {
      string: true,
    },
  },
  handler: async argv => {
    const {server, address} = argv.url ? {} : await runServer(argv)
    const url = argv.url || `${address}/ok`
    const protocol = new URL(url).protocol

    await taskPumper({
      ...argv,
      taskName: 'http',
      task: async ({runIndex, taskIndex}) => {
        return await retry(
          async () => {
            await new Promise((resolve, reject) => {
              const req = (protocol === 'http:' ? http : https).request(
                `${url}?task=${runIndex}.${taskIndex}`,
                res => {
                  const buffers = []
                  res.on('error', reject)
                  res.on('data', chunk => buffers.push(chunk))
                  res.on('end', () => {
                    const text = Buffer.concat(buffers).toString()

                    if (res.statusCode === 200) resolve(text)
                    else reject(new Error(`bad response: ${res.statusCode} (${text})`))
                  })
                },
              )
              req.on('error', reject)
              req.end()
            })
          },
          {minTimeout: 100, maxTimeout: 100, retries: 0},
        )
      },
    })

    if (server) await p(server.close.bind(server))()
  },
}
