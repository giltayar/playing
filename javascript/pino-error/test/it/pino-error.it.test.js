'use strict'
const path = require('path')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const {fetchAsJson} = require('@applitools/http-commons')
const {dockerComposeTool} = require('@applitools/docker-compose-mocha')
const {createTestLogger} = require('@applitools/loggly-pino')
const {
  getAddressForService,
  generateEnvVarsWithDependenciesVersions,
} = require('@applitools/docker-compose-testkit')
const packageJson = require('../../package.json')

const createApp = require('../..')

describe('pino-error (it)', function() {
  const composePath = path.join(__dirname, 'docker-compose.yml')
  const envName = dockerComposeTool(before, after, composePath, {
    shouldPullImages: !!process.env.NODE_ENV && process.env.NODE_ENV !== 'development',
    brutallyKill: true,
    envVars: {
      ...generateEnvVarsWithDependenciesVersions(packageJson),
    },
  })

  const {baseUrl} = setupApp()

  it('should return OK on /healthz', async () => {
    expect(await fetchAsJson(`${baseUrl()}/healthz`)).to.eql({version: packageJson.version})
  })

  it('should do something interesting...', async () => {
    // You can remove these two lines later
    const someService =
      false && (await getAddressForService(envName, composePath, 'some-service', 80))
    expect(someService).to.be.false

    expect(await fetchAsJson(`${baseUrl()}/healthz`)).to.eql({version: packageJson.version})
  })
})

function setupApp() {
  let app
  before(async () => {
    app = createApp({logger: createTestLogger()})

    await app.listen(0, 'localhost')
  })
  after(() => app.close())

  return {
    baseUrl: () => `http://localhost:${app.server.address().port}`,
    address: () => `localhost:${app.server.address().port}`,
  }
}
