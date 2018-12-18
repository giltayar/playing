'use strict'
const {describe, it} = require('mocha')

describe.skip(`TodoMVC using Cypress`, function () {
  it('can add todos and then delete them', () => {
    cy.visit('http://todomvc.com/examples/react/#/')

    cy.eyesOpen({
      appName: 'todomvc dom diff check',
      testName: 'can add todos and then delete them',
      browser: [
        {width: 1280, height: 1024}
      ],
    })

    cy.eyesCheckWindow('initial')

    cy.get('.new-todo').type('Cook dinner{enter}')

    cy.eyesCheckWindow('added todo')

    cy.get('.new-todo').type('Clean house{enter}').then(() => {debugger})

    cy.eyesCheckWindow('added another')

    cy.get('.toggle').eq(1).click()

    cy.eyesCheckWindow('toggled second todo')

    cy.eyesClose()
  })
})
