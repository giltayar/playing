'use strict'
const {describe, it} = require('mocha')
const {expect} = require('chai')
const puppeteer = require('puppeteer')

describe('Calculator App', function () {

  let browser
  before(async () => {
    browser = await puppeteer.launch({headless: true})

  })
  after(async () => {
    await browser.close()
  })

  for (let i = 0; i < 10; ++i) {
    it('should calculate as expected: ' + i, async () => {
      const page = await browser.newPage()
      await page.goto('http://localhost:3000')

      expect(await page.$eval('.display', elem=> elem.innerText)).to.equal('0')
      await (await page.$('.digit-8')).click()
      await (await page.$('.digit-4')).click()
      await (await page.$('.operator-divide')).click()
      await (await page.$('.digit-2')).click()
      await (await page.$('.operator-equals')).click()

      expect(await page.$eval('.display', elem=> elem.innerText)).to.equal('42')
    })
  }
})
