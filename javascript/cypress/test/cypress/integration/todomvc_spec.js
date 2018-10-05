'use strict'
const {describe, it} = require('mocha')

describe(`TodoMVC using Cypress`, function () {
  it('can add todos and then delete them', () => {
    cy.visit('http://todomvc.com/examples/react/#/')

    cy.get('.new-todo').type('Cook dinner{enter}')

    cy.get('.view > label').should('have.text', 'Cook dinner')

    cy.get('.new-todo').type('Clean house{enter}').then(() => {debugger})

    cy.get('.view > label').eq(1).should('have.text', 'Clean house')

    cy.get('.toggle').eq(1).click()

    cy.contains('1 item left').should('exist')

    cy.contains('Clear completed')
  })
})
