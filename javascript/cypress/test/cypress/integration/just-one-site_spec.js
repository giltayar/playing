/// <reference types="cypress" />
'use strict'
const {describe, it} = require('mocha')

// const urlToCheck = 'https://theintercept.com/privacy-policy/'
// const urlToCheck = 'https://www.wipro.com/analytics/'
// const urlToCheck = 'https://www.reddit.com/'
// const urlToCheck = 'https://www.asos.com/river-island/river-island-button-cowl-neck-jumper/prd/1775492'
// const urlToCheck = 'https://www.booking.com/hotel/gb/crowne-plaza-reading.en-gb.html?label=gen173nr-1FCAEoggJCAlhYSDNYBGhqiAEBmAEuwgEKd2luZG93cyAxMMgBDNgBAegBAfgBC5ICAXmoAgM;sid=744946517ce928ae04665f815f1b50d3;dest_id=-2606065;dest_type=city;dist=0;hapos=2;hpos=2;room1=A,A;sb_price_type=total;srepoch=1536052404;srfid=a0ae2bc36ad5a35c36fdd5a635421af6203d2693X2;srpvid=bbaa40d992e00362;type=total;ucfs=1'
// const urlToCheck = 'https://www.airbnb.com/'
// const urlToCheck = 'https://www.lidl.com/products?category=OCI1000039&sort=productAtoZ'
// const urlToCheck = 'https://www.wikipedia.org'
// const urlToCheck = 'https://en.wikipedia.org/wiki/Trademark_symbol'
// const urlToCheck = 'http://example.com'
// const urlToCheck = 'https://edition.cnn.com'
// const urlToCheck = 'https://www.autogravity.com/inventory?page=0&query=%7B%22bodyStyles%22%3A%5B%7B%22label%22%3A%22SUV%22%2C%22queryValue%22%3A%22SUV%22%7D%5D%2C%22conditions%22%3A%5B%7B%22label%22%3A%22New%22%2C%22queryValue%22%3A%22NEW%22%7D%5D%2C%22regions%22%3A%5B%7B%22queryValue%22%3A%7B%22lat%22%3A40.755322%2C%22lon%22%3A-73.9932872%2C%22rad%22%3A30%7D%7D%5D%2C%22vehicles%22%3A%5B%7B%22label%22%3A%22Kia+Sorento%22%2C%22queryValue%22%3A%7B%22make%22%3A%7B%22id%22%3A19%7D%2C%22model%22%3A%7B%22id%22%3A646%7D%7D%7D%5D%7D&size=50&sort=dealerRank%2Cdesc'
// const urlToCheck = `https://www.unibet.com/betting`
// const urlToCheck = 'https://news.ycombinator.com/'
// const urlToCheck = 'https://www.aetna.com/employers-organizations.html'
// const urlToCheck = `https://www.jnj.com/leadership/our-leadership-team`
// const urlToCheck = 'https://www.getbridge.com/solutions/human-resources'
// const urlToCheck = 'https://www.applitools.com/'
// const urlToCheck = 'https://www.applitools.com/users/login'
// const urlToCheck = 'http://angiejones.tech/'
// const urlToCheck = 'https://investor.vanguard.com/home/'
// const urlToCheck = 'https://www.caesars.com/'
// const urlToCheck = 'https://www.flightcentre.com.au/flights'
// const urlToCheck = 'https://southwest.com'
// const urlToCheck = 'https://www.usaa.com/inet/wc/auto-insurance?wa_ref=pub_global_products_ins_auto'
// const urlToCheck = 'https://uat4.www.usbank.com/content/usbank/bank-accounts.html'
// const urlToCheck = 'https://www.pnc.com/en/personal-banking.html'
// const urlToCheck = 'https://amazon.com'
// const urlToCheck = 'https://www.cigna.com/individuals-families/'
// const urlToCheck = 'https://www.flightcentre.com.au/holidays'
// const urlToCheck = 'https://applitools-sample-web-app-testkit.surge.sh/page-with-resource.html'
// const urlToCheck = 'http://localhost:5000'
// const urlToCheck = 'https://www.newyorklife.com'
// const urlToCheck = 'https://www.kayak.com/'
// const urlToCheck = 'https://www.terminix.com/blog/'
// const urlToCheck = 'https://www.capitalone.com/'
// const urlToCheck = 'https://www.bostonglobe.com/'
// const urlToCheck = 'https://ous.test.clper.me/app/login'
// const urlToCheck = 'https://www.tower.co.nz/car-insurance'
// const urlToCheck = 'https://www.roomandboard.com/catalog/lighting/pendant-lights-and-chandeliers/abra-pendant-sets-row-of-3-or-5'
// const urlToCheck = 'https://www.tesla.com/'
// const urlToCheck = 'https://www.ibm.com/us-en/?ar=1'
// const urlToCheck = 'https://applitools.com/helloworld'
// const urlToCheck = 'https://acc.digitalredesign.nl/en/cookies/'
// const urlToCheck = 'https://acc.digitalredesign.nl/en/arrivals/ZZ2960'
// const urlToCheck = 'https://www.southwest.com/'
// const urlToCheck = 'https://www.turncar.com/es-es/'
// const urlToCheck = 'https://www.straitstimes.com/forum'
// const urlToCheck = 'https://www.schiphol.nl/en/cookies/'
// const urlToCheck = 'https://www.beatsbydre.com/'
// const urlToCheck = 'https://www.beatsbydre.com/earphones/powerbeats-pro/anthem-video'
const urlToCheck = 'https://applitools.com/helloworld'


const describeUrl = undefined

describe.only(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {
    const test = (describeUrl || urlToCheck).slice(0, 200)
    cy.visit(urlToCheck, {timeout: 60000})

    cy.eyesOpen({
      serverUrl: 'https://eyes.applitools.com',
      appName: test,
      testName: test,
      batchName: test,
      browser: [
        {width: 1200, height: 800, name: 'firefox'},
        // {width: 2048, height: 1024, name: 'firefox'},
        // {width: 1900, height: 1800, name: 'firefox'},
        // {width: 1920, height: 1080, name: 'firefox'},
        // {width: 1024, height: 768, name: 'firefox'},
        // {width: 1280, height: 800, name: 'chrome'},
        // {width: 800, height: 600, name: 'chrome'},
        {width: 1024, height: 768, name: 'chrome'},
        // {width: 1900, height: 1800, name: 'chrome'},
        // {width: 1500, height: 640, name: 'chrome'},
        {width: 1280, height: 1024, name: 'ie'},
        {width: 1280, height: 1024, name: 'ie10'},
        // {width: 1440, height: 900, name: 'ie'},
        // {width: 1280, height: 1024, name: 'ie10'},
        // {width: 1280, height: 1024, name: 'edge'},
        // {width: 700, height: 500, name: 'edge'},
        {width: 800, height: 600, name: 'edge'},
         {deviceName: 'iPhone 6/7/8'},
        // {deviceName: 'iPhone XS'},
        // {deviceName: 'iPhone 6+/7+/8+', screenOrientation: 'landscape'},
        // {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        // {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        // {deviceName: 'iPad Pro', screenOrientation: 'portrait'},
        // {deviceName: 'iPad Pro', screenOrientation: 'landscape'},
      ],
    })

    cy.eyesCheckWindow({tag: '#1:' + urlToCheck, sizeMode: 'full-page', scriptHooks: {
      // beforeCaptureScreenshot: 'document.querySelector("article-modal").style.overflowY = "visible"'
    }})
    cy.eyesClose()
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
