const webdriver = require('selenium-webdriver')
const {By, until} = webdriver
const {Eyes} = require('eyes.selenium')
require('chromedriver')

describe.only('todo list', function() {
  jest.setTimeout(30000)
  let driver
  beforeAll(async () => (driver = await new webdriver.Builder().forBrowser('chrome').build()))

  let eyes
  beforeAll(async () => {
    eyes = new Eyes()
    eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
    await eyes.open(driver, 'todo list', 'todo list', {width: 800, height: 600})
  })
  afterAll(async () => await eyes.close())

  afterAll(async () => await driver.quit())

  it('should show the todos header', async () => {
    await driver.get(`http://todomvc.com/examples/react`)

    await driver.wait(until.elementLocated(By.tagName('h1')))

    await eyes.checkWindow('Home page with no todos')
  })
})
