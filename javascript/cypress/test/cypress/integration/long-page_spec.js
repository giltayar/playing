/// <reference types="cypress" />
'use strict'
const height = 400
const width = 1000

describe('checkbox check', function() {
  const test = `long page height ${width}x${height}`
  it('should be all right', () => {
    cy.visit(`https://applitools-sample-web-app-testkit.surge.sh/long-page.html?height=${height}&width=${width}`)

    cy.eyesOpen({
      appName: test, // progress-example-standard
      testName: test,
      batchName: test,
      browser: [
        {width: 1024, height: 500, name: 'ie'}
      ],
      sendDom: false,
    })
    // cy.get('.new-todo').type('Hello{enter}')

    // cy.get('.todo-list input[type=checkbox]').click()

    cy.eyesCheckWindow({tag: 'long page', sendDom: false})


    cy.eyesClose()

  })
})


