/// <reference types="cypress" />

describe('todo actions', () => {
  before(() =>
    cy.eyesOpen({
      batchName: 'cypress vs selenium',
      appName: 'cypress vs selenium',
      testName: 'cypress vs selenium',
      browser: [
        {width: 1024, height: 768, name: 'firefox'},
        {width: 2048, height: 1024, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        {width: 2048, height: 1024, name: 'chrome'},
        {width: 1024, height: 768, name: 'ie'},
        {width: 2048, height: 1024, name: 'ie'},
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'iPhone X', screenOrientation: 'landscape'},
        {deviceName: 'iPad Pro', screenOrientation: 'portrait'},
        {deviceName: 'iPad Pro', screenOrientation: 'landscape'},
      ],
    }),
  )

  after(() => cy.eyesClose())

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Clean room{enter}')
  })

  it('should add a new todo to the list', () => {
    cy.eyesCheckWindow('new todo')
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      cy.get('.toggle').click()
      cy.eyesCheckWindow('toggle todo')
    })

    it('should clear completed', () => {
      cy.get('.toggle').click()
      cy.contains('Clear completed').click()

      cy.eyesCheckWindow('clear completed')
    })
  })
})
