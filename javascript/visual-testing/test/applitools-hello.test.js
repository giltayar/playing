'use strict'
const {describe, it, before, after} = require('mocha')
const webdriver = require('selenium-webdriver')
const {Eyes} = require('eyes.selenium')
require('chromedriver')
const {By} = webdriver

describe('Applitools Hello App', function() {
  const chromeCapabilities = webdriver.Capabilities.chrome()
  if (process.env.CI) {
    chromeCapabilities.set('chromeOptions', {args: ['--headless']})
  }

  let driver
  before(() => (driver = new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  let eyes
  before(async () => {
    eyes = new Eyes()
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    eyes.setBatch('playing', process.env.APPLITOOLS_BATCH_ID)
    await eyes.open(driver, 'Test', 'Applitools')
  })
  after(async () => await eyes.close())

  describe('home page', () => {
    it('should be visually perfect', async () => {
      await driver.get('http://applitools.com/helloworld')
      await eyes.checkWindow('Home page')

      const button = await driver.findElement(By.tagName('button'))

      await button.click()
      await eyes.checkWindow('Home page after clicking')
    })
  })
})
