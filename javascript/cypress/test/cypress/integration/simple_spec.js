'use strict'
const {describe, it} = require('mocha')

describe('Blog App', function () {
  it('should do stuff', () => {
    const random = '1' // `${Math.random() * 100000 | 0}`

    cy.eyesOpen({
      appName: 'blog app',
      testName: 'blog app cypress',
      browser: [
        {width: 1024, height: 768}
      ],
      showLogs: true,
    })

    // Visit registration page
    cy.visit('http://localhost:3000/register')

    cy.eyesCheckWindow('register') // visual snapshot

    // Register user
    cy.get(':nth-child(3) > .nav-link').click()

    cy.get('input[placeholder="Username"]').type(`user${random}`)
    cy.get('input[placeholder="Email"]').type(`user-${random}@example.com`)
    cy.get('input[placeholder="Password"]').type(`$random`)

    cy.get('.btn').click()

    cy.contains('New Post')
    cy.eyesCheckWindow('home page after register') // visual snapshot

    // Create new blog post
    cy.contains('New Post').click()

    cy.get('input[placeholder="Article Title"]')
    cy.eyesCheckWindow('new post page') // visual snapshot

    cy.get('input[placeholder="Article Title"]').type('A great blog post!')
    cy.get('input[placeholder="What\'s this article about?"]').type("It's a post about nothing")
    cy.get(':nth-child(3) > .form-control').type('Nothing... Nothing... Nothing... Nothing... Nothing... ')

    cy.get('.btn').click()

    // Add comment to blog post
    cy.get('.card-footer > .btn')
    cy.eyesCheckWindow('published blog post') // visual snapshot

    cy.get('.form-control').type('Trolling... Trolling!')
    cy.get('.card-footer > .btn').click()

    cy.get('.card-text')
    cy.eyesCheckWindow('blog post with comment') // visual snapshot

    // View all blog posts
    cy.get('.navbar-brand').click()
    cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link').click()

    cy.get('.preview-link > p')
    cy.eyesCheckWindow('home page with blog post') // visual snapshot

    cy.eyesClose()
  })
})
