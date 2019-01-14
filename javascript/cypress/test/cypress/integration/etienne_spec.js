describe.skip('Flight Center', function () {

  before(function () {
    cy.visit('https://www.flightcentre.com.au')
    cy.eyesOpen({appName: 'flight center cypress test 2', testName: 'flight center cypress test 2', batchName: 'Flight Center Cypress tests'})
  })

  after(function () {
    cy.eyesClose()
  })

  it('should look great', () => {
    cy.eyesCheckWindow('home page')
  })

})
