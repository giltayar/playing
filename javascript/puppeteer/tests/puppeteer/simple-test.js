'use strict'
const {promisify: p} = require('util')
const {describe, it} = require('mocha')
const {expect} = require('chai')
const puppeteer = require('puppeteer')
const express = require('express')

describe.only('Calculator App', function () {

  let browser
  before(async () => {
    browser = await puppeteer.launch({headless: false})

  })
  before((done) => express().use(express.static(__dirname + '/../../dist')).listen(3000, done))
  after(async () => {
    await browser.close()
  })

  it.only('should calculate as expected', async () => {
    const page = await browser.newPage()
    page.on('console', msg => console.log('console:', msg.text()));2060
    await page.setRequestInterception(true)
    page.on('request', interceptedRequest => {
      if (interceptedRequest.url().endsWith('.js')) {
        console.log('@@@@@@GIL!!!', interceptedRequest.url())
        interceptedRequest.continue({url: 'http://localhost:3000/bundle.js'})
      } else {
        console.log('@@@@@@GIL', interceptedRequest.url())
        interceptedRequest.continue()
      }
    })
    await page.goto('http://localhost:3000')

    expect(await page.$eval('.display', elem => elem.innerText)).to.equal('0')
    await (await page.$('.digit-8')).click()
    await (await page.$('.digit-4')).click()
    await (await page.$('.operator-divide')).click()
    await (await page.$('.digit-2')).click()
    await (await page.$('.operator-equals')).click()

    expect(await page.$eval('.display', elem=> elem.innerText)).to.equal('42')

    expect(await page.evaluate(`fetch('http://localhost:3000/zundle.js').then(res => res.ok ? res.text() : res.statusText, err => err.toString()).then(x => {console.log('external fetch:', x.slice(0, 1000)); return x})`)).to.equal('sdfsdf')
  })
})
