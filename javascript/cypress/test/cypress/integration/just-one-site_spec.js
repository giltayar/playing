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
// const urlToCheck = 'http://example.com'
const urlToCheck = 'https://edition.cnn.com'
// const urlToCheck = 'https://www.autogravity.com/inventory?page=0&query=%7B%22bodyStyles%22%3A%5B%7B%22label%22%3A%22SUV%22%2C%22queryValue%22%3A%22SUV%22%7D%5D%2C%22conditions%22%3A%5B%7B%22label%22%3A%22New%22%2C%22queryValue%22%3A%22NEW%22%7D%5D%2C%22regions%22%3A%5B%7B%22queryValue%22%3A%7B%22lat%22%3A40.755322%2C%22lon%22%3A-73.9932872%2C%22rad%22%3A30%7D%7D%5D%2C%22vehicles%22%3A%5B%7B%22label%22%3A%22Kia+Sorento%22%2C%22queryValue%22%3A%7B%22make%22%3A%7B%22id%22%3A19%7D%2C%22model%22%3A%7B%22id%22%3A646%7D%7D%7D%5D%7D&size=50&sort=dealerRank%2Cdesc'
const describeUrl = undefined
// const urlToCheck = `https://www.jnj.com/leadership/our-leadership-team`

describe.only(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {
    const test = (describeUrl || urlToCheck).slice(0, 200)

    cy.viewport(1200, 800)

    cy.visit(urlToCheck)

    cy.eyesOpen({
      appName: test, // progress-example-standard
      testName: test,
      batchName: test,
      browser: [
        // {width: 1280, height: 1024, name: 'firefox'},
        {width: 1200, height: 800, name: 'chrome'}
      ],
    })

    // cy.get('#field-guide-toggle').click()

    cy.eyesCheckWindow({tag: '#1:' + urlToCheck, sizeMode: 'full-page', sendDom: false})
    cy.eyesClose()
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
