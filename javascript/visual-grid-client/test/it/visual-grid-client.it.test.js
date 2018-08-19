'use strict'
const path = require('path')
const fs = require('fs')
const {describe, it, before, after, beforeEach, afterEach} = require('mocha')
const {makeVisualGridClient, initConfig} = require('@applitools/visual-grid-client')
const domNodesToCdt = require('@applitools/visual-grid-client/src/browser-util/domNodesToCdt')
const {JSDOM} = require('jsdom')

describe('visual-grid-client test', function() {
  let visualGridClient
  let closePromises = []

  before(() => {
    console.log('making visual grid client...')
    visualGridClient = makeVisualGridClient({
      ...initConfig(),
      showLogs: true,
      renderStatusTimeout: 60000,
      renderStatusInterval: 1000,
    })
  })

  after(async () => {
    console.log('waiting for test results...')
    await visualGridClient.waitForTestResults(closePromises)
  })

  let checkWindow, close
  beforeEach(async () => {
    console.log('starting test...')
    ;({checkWindow, close} = await visualGridClient.openEyes({
      appName: 'visual grid client with a cat',
      testName: 'visual-grid-client test',
    }))
  })
  afterEach(() => closePromises.push(close()))

  it('should work', async () => {
    console.log('checking window...')
    checkWindow({
      tag: 'first test',
      url: 'http://localhost/index.html',
      cdt: domNodesToCdt(
        new JSDOM(fs.readFileSync(path.join(__dirname, 'resources/index.html'), 'utf-8')),
      ),
      sizeMode: 'viewport',
      resourceContents: {
        'cat.jpeg': {
          url: 'cat.jpeg',
          type: 'image/jpeg',
          value: fs.readFileSync(path.join(__dirname, 'resources/cat.jpeg')),
        },
      },
    })
  })
})
