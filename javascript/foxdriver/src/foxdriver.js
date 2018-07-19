'use strict'
const Foxdriver = require('foxdriver')

async function main() {
  const {browser} = await Foxdriver.launch({
    url: 'https://en.wikipedia.org/wiki/Main_Page',
  })

  // wait until page is loaded
  await new Promise(resolve => setTimeout(resolve, 3000))

  await browser.device.screenshotToFile(__dirname + '/screenshot.png')

  await browser.close()
}

main().catch(console.error)
