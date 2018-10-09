'use strict'
const puppeteer = require('puppeteer')

async function main() {
  // const browser = await puppeteer.launch({headless: true})
  const browser = await puppeteer.connect({browserWSEndpoint: `ws://0.0.0.0:33068/devtools/browser/9b5997cf-9a47-4efd-9a71-7621306a56c1`})

  const page = await browser.newPage()
  await page.goto('https://www.amazon.com/All-new-Echo-Dot-3rd-Gen/dp/B0792R1RSN/ref=redir_mobile_desktop')

  console.log('taking screenshot...')
  await page.screenshot({path: `screenshot.png`, fullPage: true})
  // const height = 9891
  // for (let i = 0; i < 2; ++i) {
  //   await page.screenshot({path: `screenshot-${i + 1}.png`, clip: {x: 0, y: 5000 * i, width: 1018, height: i === 0 ? 5000 : 9891 - 5000} })
  // }
  console.log('took screenshot')
}

main().catch(console.error)
