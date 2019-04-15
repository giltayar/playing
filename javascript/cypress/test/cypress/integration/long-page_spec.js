/// <reference types="cypress" />
'use strict'
const height = 1000
const width = 1000

Cypress.config('eyesTimeout', 1800000)

describe('checkbox check', function() {
  const test = `long page height ${width}x${height}`
  it('should be all right', () => {
    cy.visit(`https://applitools-sample-web-app-testkit.surge.sh/long-page.html?height=${height}&width=${width}`)

    cy.eyesOpen({
      appName: test, // progress-example-standard
      testName: test,
      batchName: test,
      browser: [
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'firefox'},
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
    // cy.get('.new-todo').type('Hello{enter}')

    // cy.get('.todo-list input[type=checkbox]').click()

    cy.eyesCheckWindow({tag: 'long page 1'})
    cy.eyesCheckWindow({tag: 'long page 1 region', sizeMode: 'selector', selector: '#long'})
    cy.eyesCheckWindow({tag: 'long page 1 viewport', sizeMode: 'viewport'})

    cy.visit(`https://applitools-sample-web-app-testkit.surge.sh/long-page.html?height=${height}&width=${width}&top=100&left=100`)
    cy.eyesCheckWindow({tag: 'long page 2'})
    cy.eyesCheckWindow({tag: 'long page 2 region', sizeMode: 'selector', selector: '#long'})
    cy.eyesCheckWindow({tag: 'long page 2 viewport', sizeMode: 'viewport'})


    cy.eyesClose()

  })
})


