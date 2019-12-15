'use strict'
const {promisify: p} = require('util')
const fs = require('fs')
const webdriver = require('selenium-webdriver')
const {Options} = require('selenium-webdriver/firefox')
// const {firefox} = webdriver

require('geckodriver')

async function main() {
  console.log('initializing driver')
  const driver = await new webdriver.Builder()
    // .setFirefoxOptions(new Options().addArguments('--headless'))
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build()

  console.log('navigating')
  await driver.get('https://the-internet.herokuapp.com/checkboxes')

  console.log('taking screenshot')
  const pngBuffer = await driver.takeScreenshot()

  console.log('writing file')
  await p(fs.writeFile)('foo.png', Buffer.from(pngBuffer, 'base64'))
}

main().catch(err => {
  console.error(err.toString())

  process.exit(1)
})
