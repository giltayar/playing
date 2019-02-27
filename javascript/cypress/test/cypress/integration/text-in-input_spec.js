it("Services page", function() {
  cy.viewport(414, 746);

  cy.visit("https://beta.oral.fi/palvelut");

  cy.eyesOpen({
    appName: "Oral",
    testName: "Service regression tests",
    browser: { width: 414, height: 746, name: "chrome" }
  });

  cy.get("#serviceSearchInput input").clear();
  cy.get("#serviceSearchInput input").type("paikkaus").blur();
  // Wait for the debounce
  cy.wait(600);

  cy.eyesCheckWindow("Service search");

  cy.eyesClose();
});
