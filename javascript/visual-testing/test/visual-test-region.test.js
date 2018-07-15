'use strict'
const {describe, it, before, after} = require('mocha')
const webdriver = require('selenium-webdriver')
const {Eyes} = require('eyes.selenium')
require('chromedriver')
const app = require('../src/sample-web-app')()
const {By} = webdriver

describe('Big Region', function() {
  const chromeCapabilities = webdriver.Capabilities.chrome()
  if (process.env.CIRCLECI) {
    chromeCapabilities.set('chromeOptions', {args: ['--headless']})
  }

  let server
  let driver
  let eyes
  before(done => (server = app.listen(process.env.PORT || undefined, done)))
  after(() => server.close())

  before(() => (driver = new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  before(async () => {
    eyes = new Eyes()
    if (!process.env.APPLITOOLS_API_KEY)
      throw new Error('Set APPLITOOLS_API_KEY env var to your key')
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    eyes.setBatch('playing', process.env.APPLITOOLS_BATCH_ID)
    await eyes.open(driver, 'Sample', 'big-region', {width: 400, height: 600})
  })
  after(async () => await eyes.close())

  const baseUrl = () => `http://localhost:${server.address().port}`

  it.only('screenshot region bigger than viewport should work', async () => {
    await driver.get(`${baseUrl()}/big-region.html`)

    const bigRegionElement = await driver.findElement(By.css('#big-region'))
    console.log('@@@GIL', bigRegionElement)

    await eyes.checkWindow('Whole page')
    await eyes.check('just the region', Target.region(by))
  })
})
