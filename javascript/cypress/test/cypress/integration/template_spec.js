/// <reference types="cypress" />
'use strict'

Cypress.config('eyesTimeout', 1800000)

describe('testing ie', function() {
  const url = '<whichever-url-you-want>'
  const test = `testing ie at ${url}`

  it('should be all right', () => {
    cy.visit(`<whichever URL you want>`)

    cy.eyesOpen({
      appName: test,
      testName: test,
      batchName: test,
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'ie11'},
        {width: 1024, height: 768, name: 'ie10'},
        {width: 800, height: 600, name: 'ie11'},
        {width: 800, height: 600, name: 'ie10'},
      ],
    })

    cy.eyesCheckWindow({tag: 'long page 1'})

    cy.eyesClose()
  })
})
