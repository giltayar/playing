#!/usr/bin/env node
'use strict'
const {logger, close} = require('@applitools/loggly-pino').createLogger({
  appName: 'pino-error',
  logName: 'applitools:pino-error:run',
  prettyPrint: true,
  quiet: false,
})
const createApp = require('../')

async function main() {
  const app = createApp({logger})

  const address = await app.listen(process.env.PORT || 3000, '0.0.0.0')
  await app.ready()

  logger.info({action: 'listen-app', address, success: true})
}

main().catch(async err => {
  try {
    console.error(`Webserver crashed: ${err.stack || err.toString()}`)
    logger.error(err)
    await close()
  } finally {
    process.exit(1)
  }
})
