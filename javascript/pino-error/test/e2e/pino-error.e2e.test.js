'use strict'
const path = require('path')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const {fetchAsJson} = require('@applitools/http-commons')
const {dockerComposeTool} = require('@applitools/docker-compose-mocha')
const {
  getAddressForService,
  generateEnvVarsWithDependenciesVersions,
} = require('@applitools/docker-compose-testkit')
const packageJson = require('../../package.json')

describe('pino-error (e2e)', function() {
  const composePath = path.join(__dirname, 'docker-compose.yml')
  const envName = dockerComposeTool(before, after, composePath, {
    shouldPullImages: !!process.env.NODE_ENV && process.env.NODE_ENV !== 'development',
    brutallyKill: true,
    envVars: {
      ...generateEnvVarsWithDependenciesVersions(packageJson),
    },
  })

  it('should return OK on /healthz', async () => {
    const appAddress = await getAddressForService(envName, composePath, 'app', 80)

    expect(await fetchAsJson(`http://${appAddress}/healthz`)).to.eql({version: packageJson.version})
  })
})
