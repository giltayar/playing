'use strict'
const {promisify: p} = require('util')
const fastifyFactory = require('fastify')

async function runServer({timeout, verbose: verboseLevel}) {
  const fastify = fastifyFactory()

  fastify.get('/ok', async () => {
    if (timeout) await p(setTimeout)(timeout)

    return 'ok'
  })

  fastify.setErrorHandler((err, request) => {
    console.log('Error %s on request to %s', err, request.raw.url)
  })
  fastify.addHook('onRequest', (req, _res, next) => {
    if (verboseLevel) console.log('request to %s', req.url)
    next()
  })

  const address = await fastify.listen(0, '127.0.0.1', 2000)

  return {server: fastify, address}
}

module.exports = runServer
