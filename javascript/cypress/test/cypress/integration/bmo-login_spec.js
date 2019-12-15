/// <reference types="cypress" />

describe('', function() {
  it('', () => {
    cy.visit('https://m2.bmo.com/BMOMobile/apps/services/www/BMOMobileBanking/mobilewebapp/default/BMOMobileBanking.html')


    cy.get('input[aria-label="Your card number"]').type('111')
    cy.get('input[aria-label="Your password"]').type('lalala')
    cy.contains('SIGN IN').click()
  })
})

// Needed only for non-Electron runs
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})