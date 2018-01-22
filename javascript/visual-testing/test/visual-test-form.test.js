'use strict'
const {describe, it, before, after} = require('mocha')
const webdriver = require('selenium-webdriver')
const {Eyes} = require('eyes.selenium')
require('chromedriver')
const app = require('../src/sample-web-app')()
const {By} = webdriver

describe('Login and Registration', function() {
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
    await eyes.open(driver, 'Sample', 'login-and-registration', {width: 400, height: 600})
  })
  after(async () => await eyes.close())

  const baseUrl = () => `http://localhost:${server.address().port}`

  describe('registration form', () => {
    it('username should be copied from login form', async () => {
      await driver.get(`${baseUrl()}/login-and-registration.html`)
      await eyes.checkWindow('Login Page')

      const loginUserNameElement = await driver.findElement(
        By.css('#login-form input[name="username"]'),
      )

      await loginUserNameElement.sendKeys('A User Name')

      const button = await driver.findElement(By.id('register-form-link'))
      await button.click()

      await eyes.checkWindow('Registration page after moving from login')
    })
  })
})
