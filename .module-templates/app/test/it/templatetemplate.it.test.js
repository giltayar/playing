'use strict'
const path = require('path')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const fetch = require('node-fetch')
const {dockerComposeTool} = require('docker-compose-mocha')
const {getAddressForService} = require('@applitools/docker-compose-testkit')

const app = require('../..')

describe('templatetemplate it', function() {
  this.retries(global.v8debug || /--inspect/.test(process.execArgv.join(' ')) ? 0 : 3)

  const composePath = path.join(__dirname, 'docker-compose.yml')
  const envName = dockerComposeTool(before, after, composePath, {
    shouldPullImages: !!process.env.NODE_ENV && process.env.NODE_ENV !== 'development',
    brutallyKill: true,
  })

  const {baseUrl} = setupApp()

  it('should return OK on /', async () => {
    const response = await fetch(`${baseUrl()}/`)

    expect(response.status).to.equal(200)
    expect(await response.text()).to.equal('OK')
  })
})

function setupApp() {
  let server

  before(async () => {
    await new Promise((resolve, reject) => {
      server = app({}).listen(err => (err ? reject(err) : resolve()))
    })
  })
  after(done => server.close(done))

  return {
    baseUrl: () => `http://localhost:${server.address().port}`,
    address: () => `localhost:${server.address().port}`,
  }
}
