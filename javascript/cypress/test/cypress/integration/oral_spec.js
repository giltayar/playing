describe('Hello world', () => {
  it('works', () => {
    cy.eyesOpen({
    appName: 'Oral',
    testName: 'Service page regression tests',
    browser: [{width: 1024, height: 768, name: 'chrome'}, {width: 1024, height: 768, name: 'firefox'},{width: 1024, height: 768, name: 'ie'}]
    });

    cy.visit('https://beta.oral.fi/palvelut/hammaskiven-poisto/');

    cy.wait(5000);

  // Wait for times to be found
  // This component which has 5 items is clearly gone from the actual screenshot, the whole DOM element (.oral-select-time-button) will be missing unless the component has finished rendering.
    cy.get('#next-times-service .oral-select-time-button').should('have.length', 5);

    cy.get('[aria-controls="panel-time-reservation"]').click();

    cy.eyesCheckWindow('Nearby times');
    cy.eyesClose();
  });
 });