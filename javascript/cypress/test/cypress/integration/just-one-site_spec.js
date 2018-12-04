'use strict'
const {describe, it} = require('mocha')

const urlToCheck = 'https://www.autogravity.com/inventory?page=0&query=%7B%22bodyStyles%22%3A%5B%7B%22label%22%3A%22SUV%22%2C%22queryValue%22%3A%22SUV%22%7D%5D%2C%22conditions%22%3A%5B%7B%22label%22%3A%22New%22%2C%22queryValue%22%3A%22NEW%22%7D%5D%2C%22regions%22%3A%5B%7B%22queryValue%22%3A%7B%22lat%22%3A40.755322%2C%22lon%22%3A-73.9932872%2C%22rad%22%3A30%7D%7D%5D%2C%22vehicles%22%3A%5B%7B%22label%22%3A%22Kia+Sorento%22%2C%22queryValue%22%3A%7B%22make%22%3A%7B%22id%22%3A19%7D%2C%22model%22%3A%7B%22id%22%3A646%7D%7D%7D%5D%7D&size=50&sort=dealerRank%2Cdesc'
const describeUrl = 'autogravity ticket kia sorento page'
//const urlToCheck = 'https://www.news.com.au/entertainment?ad_test_env=truskindesktopsittest310518'
// const urlToCheck = `https://www.jnj.com/leadership/our-leadership-team`


describe.only(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {
    const test = describeUrl || urlToCheck

    cy.visit(urlToCheck)

    cy.eyesOpen({
      appName: test,
      testName: test,
      batchName: test,
      browser: [
        {width: 1280, height: 800}
      ],
    })

    cy.eyesCheckWindow({tag: urlToCheck, sizeMode: 'full-page'})

    cy.eyesClose()
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
