/// <reference types="cypress" />

it('should profile page', () => {
  cy.visit('https://app.trint.com/login')

  cy.get('#username').type('gil.tayar@applitools.com')
  cy.get('#password').type('Pf07zKgobnwU')
  cy.get('button[type=submit]').click()


  cy.wait(5000)

  cy.visit('https://app.trint.com/account/profile')

  cy.eyesOpen({
    appName: 'trint',
    testName: 'https://app.trint.com/account/profile',
    browser: [
      {width: 1024, height: 768, name: 'chrome'},
      // {width: 1024, height: 768, name: 'firefox'},
      // {width: 1024, height: 768, name: 'ie'}
    ]
  });

  cy.eyesCheckWindow({tag: 'https://app.trint.com/account/profile', sendDom: false})

  cy.eyesClose()


})