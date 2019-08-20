/// <reference types="cypress" />

describe("QF Money test", function() {
  it("QF Money test", function() {
    var pages = [
      "https://www.qantasmoney.com",
      "https://www.qantasmoney.com/credit-cards/premier-platinum",
      "https://www.qantasmoney.com/application/qpcb/",
      "https://www.qantasmoney.com/travel-money-card",
      "https://www.qantasmoney.com/app",
      "https://www.qantasmoney.com/help-and-support"
    ];

    for (let i = 0; i < 4; i++) {
      cy.visit(pages[i]);

      if (i === 0)
        cy.eyesOpen({
          appName: "QF",
          testName: "QF Money Cypress VG3",
          batchName: "QF Money Cypress VG3",
          browser: [
            { width: 1024, height: 768, name: "chrome" },
            // {width: 800, height: 600, name: 'firefox'},
            {width: 800, height: 600, name: 'ie11'},
            // {width: 800, height: 600, name: 'edge'},
            // {deviceName: 'iPhone X', screenOrientation: 'landscape'},
            // {deviceName: 'iPhone 6/7/8', screenOrientation: 'landscape'},
            // {deviceName: 'Galaxy S5', screenOrientation: 'landscape'}
          ]
        });

      cy.eyesCheckWindow({
        tag: "page " + i,
      });
    }

    cy.eyesClose();
  });
});
