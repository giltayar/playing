'use strict'
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const retry = require('retry-as-promised')
const webdriver = require('selenium-webdriver')
require('chromedriver')
const {By, until} = webdriver
const app = require('../src/sample-web-app')()

describe('sample web app', function() {
  let server
  let driver
  before(done => (server = app.listen(process.env.PORT || undefined, done)))
  after(() => server.close())

  before(() => (driver = new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  it('hello world document shows hello world', async () => {
    const baseUrl = `http://${server.address().port}`

    await driver.get(`${baseUrl}/hello-world-document.html`)

    await driver.wait(until.elementLocated(By.tagName('h1')))

    expect(await (await driver.findElement(By.tagName('h1'))).getText()).to.equal('Hello, world')
  })
})
