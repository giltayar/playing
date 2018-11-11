'use strict'
const {describe, it} = require('mocha')

const urlToCheck = `https://www.autogravity.com/about`

describe(`URL: ${urlToCheck}`, function () {
  it(urlToCheck, () => {

    cy.eyesOpen({
      appName: urlToCheck,
      testName: urlToCheck,
      browser: [
        {width: 1280, height: 800}
      ],
    })

    cy.visit(urlToCheck)

    cy.eyesCheckWindow({tag: urlToCheck, sizeMode: 'full-page'})

    cy.eyesClose()
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
