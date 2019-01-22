/// <reference types="cypress" />
describe('Content', () => {
  const browser = { width: 1920, height: 1080, name: 'chrome' };

  it('looks good on Home page', () => {
    cy.viewport('macbook-13');
    cy.eyesOpen({
      appName: 'TEST-AG',
      batchName: 'autogravity problem',
      envName: 'prod',
      testName: 'e2e - test',
      browser,
    });

    // Home page
    cy.visit('https://www.autogravity.com');
    cy.get('footer').scrollIntoView({ duration: 1500 }); // Ensure all images are loaded;
    cy.get('[data-testid="HeroBanner"]').scrollIntoView(); // Return to the top position for the header;
    cy.wait(500); // Wait for the header logo animation;
    cy.eyesCheckWindow({ tag: 'Home' });
    cy.contains('Shop New').click();

    // Makes page
    cy.contains('All New Cars and Trucks').should('be.visible');
    cy.get('footer').scrollIntoView({ duration: 1500 });
    cy.get('header>h1').scrollIntoView();
    cy.wait(500);
    cy.eyesCheckWindow({ tag: 'New Makes' });
    cy.contains('Mercedes-Benz').click();

    // Models page
    cy.contains('Find and Finance Your Mercedes-Benz Car or Van in Minutes', {timeout: 10000});
    cy.get('footer').scrollIntoView({ duration: 1500 });
    cy.get('header+div>header').scrollIntoView();
    cy.wait(500);
    cy.eyesCheckWindow({ tag: 'New Models' });
    cy.get('h4').contains('C-Class').eq(0).click();

    // Inventory page
    // cy.get('.pagination', {timeout: 10000}).scrollIntoView({ duration: 1500 });
    // cy.wait(500);
    // cy.eyesCheckWindow({ tag: 'Inventory' });

    cy.eyesClose();
  });
});