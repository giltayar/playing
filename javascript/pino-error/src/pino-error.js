'use strict'
const fastify = require('fastify')
const {version} = require('../package.json')

module.exports = createApp

function createApp({logger}) {
  const app = fastify()

  app.get('/healthz', async () => {
    throw new Error('ouch')
  })

  app.setErrorHandler(err => {
    console.error(err)
    throw new Error('error handler error')
  })

  logger.info({action: 'create-app', success: true})

  return app
}
