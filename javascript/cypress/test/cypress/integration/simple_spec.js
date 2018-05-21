'use strict'
const {describe, it} = require('mocha')

describe('Blog App', function () {
  it('should do stuff', () => {
    const random = `${(Math.random() * 100001) | 0}`
    cy.visit('http://localhost:3000')

    cy.eyesOpen('blog app', 'blog app cypress for Kent C. Dodds', {width: 1024, height: 768})

    // cy.get(':nth-child(3) > .nav-link').click()

    // cy.get('input[placeholder="Username"]').type(`user${random}`)
    // cy.get('input[placeholder="Email"]').type(`user-${random}@example.com`)
    // cy.get('input[placeholder="Password"]').type(`$random`)

    // cy.get('.btn').click()

    cy.eyesCheckWindow()

    // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    // cy.get('.container > .nav > :nth-child(2) > .nav-link').click()

    // cy.get('input[placeholder="Article Title"]').type('A great blog post!')
    // cy.get('input[placeholder="What\'s this article about?"]').type("It's a post about nothing")
    // cy.get(':nth-child(3) > .form-control').type('Nothing... Nothing... Nothing... Nothing... Nothing... ')

    // cy.get('.btn').click()

    // cy.eyesCheckWindow()

    // cy.get('.form-control').type('Trolling... Trolling!')
    // cy.get('.card-footer > .btn').click()

    // cy.eyesCheckWindow()

    // cy.get('.navbar-brand').click()
    // cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()

    // cy.eyesCheckWindow()

    cy.eyesClose()
  })
})
