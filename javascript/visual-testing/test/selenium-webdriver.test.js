'use strict'
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const webdriver = require('selenium-webdriver')
const {Eyes} = require('eyes.selenium')
const app = require('../src/sample-web-app')()
require('chromedriver')
// require('geckodriver')
const {By, until} = webdriver

describe.only('sample web app', function() {
  let server
  let driver
  let eyes
  before(done => (server = app.listen(process.env.PORT || undefined, done)))
  after(() => server.close())

  const chromeCapabilities = webdriver.Capabilities.chrome()
  if (process.env.CI) {
    chromeCapabilities.set('chromeOptions', {args: ['--headless']})
  }

  before(
    () =>
      (driver = new webdriver.Builder()
        .forBrowser('chrome')
        .withCapabilities(chromeCapabilities)
        .build()),
  )
  after(async () => await driver.quit())

  before(async () => {
    eyes = new Eyes()
    if (!process.env.APPLITOOLS_API_KEY)
      throw new Error('Set APPLITOOLS_API_KEY env var to your key')
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    await eyes.open(driver, 'Samp', 'Sample Web App Test', {width: 800, height: 600})
  })
  after(async () => await eyes.close())

  const baseUrl = () => `http://localhost:${server.address().port}`

  it('hello world document shows hello world', async () => {
    await driver.get(`${baseUrl()}/hello-world-document.html`)

    await driver.wait(until.elementLocated(By.tagName('h1')))

    expect(await (await driver.findElement(By.tagName('h1'))).getText()).to.equal('Hello, world')

    await eyes.checkWindow('Hello world appears')
  })

  it('should fill dismiss alert', async () => {
    await driver.get(`${baseUrl()}/alert-popup.html`)

    await driver.wait(until.elementLocated(By.tagName('button')))

    expect((await (await driver.findElement(By.tagName('button'))).getText()).trim()).to.equal(
      'Not Clicked!',
    )

    await (await driver.findElement(By.tagName('button'))).click()

    const alert = await driver.wait(until.alertIsPresent(), 3000)
    await alert.dismiss()

    expect(await (await driver.findElement(By.tagName('button'))).getText()).to.equal('Clicked!')
  })

  it.skip('should fill information in an authentication alert and continue', async () => {
    await driver.get(`${baseUrl()}/needs-authentication`)

    // await p(setTimeout)(3000)
    // const alert = await driver.switchTo().alert()

    const alert = await driver.wait(until.alertIsPresent(), 3000)
    await alert.authenticateAs('theUserName', 'thePassword')

    expect(await (await driver.findElement(By.tagName('h1'))).getText()).to.equal('Hello, world')
  })
})
