/// <reference types="cypress" />
'use strict'
const height = 1000
const width = 1000

Cypress.config('eyesTimeout', 1800000)

describe('ie rendering', function() {
  const urlToCheck = 'https://www.lidl.com/'
  const test = `ie test ${urlToCheck}`
  it('should be all right', () => {
    cy.visit(urlToCheck)

    cy.eyesOpen({
      appName: test,
      testName: test,
      batchName: test,
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'ie11'},
        {width: 1024, height: 768, name: 'ie10'},
        {width: 1024, height: 768, name: 'edge'},
        {width: 1280, height: 1024, name: 'chrome'},
        {width: 1280, height: 1024, name: 'ie11'},
        {width: 1280, height: 1024, name: 'ie10'},
        {width: 1280, height: 1024, name: 'edge'},
        {width: 800, height: 600, name: 'chrome'},
        {width: 800, height: 600, name: 'ie11'},
        {width: 800, height: 600, name: 'ie10'},
        {width: 800, height: 600, name: 'edge'},
      ],
    })

    cy.eyesCheckWindow({tag: 'page 1', sendDom: false})
    cy.eyesCheckWindow({tag: 'page 1 region', sizeMode: 'selector', selector: 'header', sendDom: false})
    cy.eyesCheckWindow({tag: 'page 1 viewport', sizeMode: 'viewport', sendDom: false})

    cy.eyesCheckWindow({tag: 'page 2', sendDom: false})
    cy.eyesCheckWindow({tag: 'page 2 region', sizeMode: 'selector', selector: 'header', sendDom: false})
    cy.eyesCheckWindow({tag: 'page 2 viewport', sizeMode: 'viewport', sendDom: false})

    cy.eyesClose()

  })
})


