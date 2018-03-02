'use strict'
const {describe, it, before, after} = require('mocha')
// const {expect} = require('chai')
const {Eyes} = require('eyes.selenium')
const webdriver = require('selenium-webdriver')
require('chromedriver')

describe.only('Applitools', function() {
  let driver

  before(async () => {
    const chromeCapabilities = webdriver.Capabilities.chrome()
    if (process.env.CI) {
      chromeCapabilities.set('chromeOptions', {args: ['--headless']})
    }

    driver = await new webdriver.Builder().forBrowser('chrome').build()
  })
  after(async () => {
    await driver.quit()
  })

  let eyes
  before(async () => {
    eyes = new Eyes()

    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    await eyes.open(driver, 'Hello World', 'SauceCon', {width: 800, height: 600})
  })
  after(async () => {
    await eyes.close()
  })

  it('works as expected', async () => {
    await driver.get('https://applitools.com/helloworld') // add ?diff2 to get "bugs"

    // Visual Checkpoint #1
    await eyes.checkWindow('Main Page')

    // Click the "Click me!" button.
    await (await driver.findElement(webdriver.By.tagName('button'))).click()

    // Visual checkpoint #2.
    await eyes.checkWindow('Click!')
  })
})
