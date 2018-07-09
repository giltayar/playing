'use strict'
const puppeteer = require('puppeteer')

async function main() {
  const browser = await puppeteer.launch({headless: false})

  const page = await browser.newPage()
  await page.goto('https://summit2018.reversim.com/')

  console.log('taking screenshot...')
  await page.screenshot({path: 'screenshot.png', fullPage: true})
  console.log('took screenshot')
}

main().catch(console.error)
