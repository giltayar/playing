describe('Hello world', () => {

  const url = 'https://theintercept.com/privacy-policy/' // 'https://www.wipro.com/analytics/'
  it('works', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      // debugger
      return false
    })

    cy.visit(url);

    cy.eyesOpen({
      appName: 'Sophie',
      testName: `Sophie ${url}`,
      browser: { width: 800, height: 600, name: 'chrome' },

    });
    cy.eyesCheckWindow('Main Page');
    // cy.get('button').click();
    // cy.eyesCheckWindow('Click!');
    cy.eyesClose();
  });
 });
