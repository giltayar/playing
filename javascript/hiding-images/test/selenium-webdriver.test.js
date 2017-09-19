'use strict'
const fs = require('fs')
const {describe, it, before, after} = require('mocha')
const {expect} = require('chai')
const webdriver = require('selenium-webdriver')
const {Eyes} = require('eyes.selenium')
require('chromedriver')
require('geckodriver')
const {By, until} = webdriver

describe('sample web app', function() {
  let driver
  let eyes

  before(() => (driver = new webdriver.Builder().forBrowser('chrome').build()))
  after(async () => await driver.quit())

  before(async () => {
    eyes = new Eyes()

    if (!process.env.APPLITOOLS_APIKEY) throw new Error('Set APPLITOOLS_APIKEY env var to your key')
    eyes.setApiKey(process.env.APPLITOOLS_APIKEY)
    await eyes.open(driver, 'Samp', 'Sample Web App Test', {width: 800, height: 600})
  })
  after(async () => await eyes.close())

  it('hides images', async () => {
    await driver.get(`http://www.geektime.com/`)

    await driver.wait(until.titleContains('Geektime'))

    await driver.executeScript(
      fs.readFileSync(__dirname + '/../src/hide-images.js', {encoding: 'utf-8'}),
    )

    console.log('yes!')
  })
})
