'use strict'
const {describe, it} = require('mocha')

describe('Calulator App', function () {
  for (let i = 0; i < 10; ++i) {
    it('should calculate as expected: ' + i, () => {
      cy.visit('http://localhost:3000')

      cy.get('.display').contains('0')

      cy.get('.digit-8').click()
      cy.get('.digit-4').click()
      cy.get('.operator-divide').click()
      cy.get('.digit-2').click()
      cy.get('.operator-equals').click()

      cy.get('.display').should('have.text', '42')
    })
  }
})
