/// <reference types="cypress" />
'use strict'

describe('Slack', function() {
  it('slack', () => {

    const test = 'Slack messages of DC11D3CCF'

    cy.viewport(1024, 768)

    cy.visit(`https://slack.com/`)

    cy.eyesOpen({
      appName: test, // progress-example-standard
      testName: test,
      batchName: test,
      browser: [
        // {width: 1024, height: 768, name: 'firefox'},
        // {width: 2048, height: 1024, name: 'firefox'},
        // {width: 1900, height: 1800, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        // {width: 2048, height: 1024, name: 'chrome'},
        // {width: 1900, height: 1800, name: 'chrome'},
        // {width: 1024, height: 768, name: 'ie'},
        // {width: 1024, height: 768, name: 'edge'},
        // {width: 700, height: 500, name: 'edge'},
        // {width: 800, height: 600, name: 'edge'},
        // {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        // {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        // {deviceName: 'iPad Pro', screenOrientation: 'portrait'},
        // {deviceName: 'iPad Pro', screenOrientation: 'landscape'},
      ],
    })

    cy.get('.u-margin-bottom--flush > a').click()

    cy.get('#domain').type('applitools{enter}')

    cy.get('#email').type('gil.tayar@applitools.com')
    cy.get('#password').type(Cypress.env('SLACK_PASSWORD'))

    cy.get('#signin_btn').click()

    cy.contains('general', {timeout: 20000}).click({force: true})

    cy.wait(10000)
    cy.eyesCheckWindow({tag: 'messages', sizeMode: 'viewport'})

    cy.eyesClose()
  })
})
