/// <reference types="cypress" />
'use strict'
describe('checkbox check', function() {
  const test = 'checkbox checked state in dom diff'
  it('should be all right', () => {
    cy.visit('https://todomvc-app-for-testing.surge.sh/')

    cy.eyesOpen({
      appName: test, // progress-example-standard
      testName: test,
      batchName: test,
      browser: [
        {width: 1200, height: 800, name: 'chrome'}
      ],
    })
    cy.get('.new-todo').type('Hello{enter}')

    cy.get('.todo-list input[type=checkbox]').click()

    cy.eyesCheckWindow({ tag: 'Checkbox' })


    cy.eyesClose()

  })
})
