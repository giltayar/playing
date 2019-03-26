/// <reference types="cypress" />

describe.only(`appium pro`, function () {
  it('should!', () => {
    cy.visit(`https://appiumpro.com`)
    cy.eyesOpen({
      appName: 'appium pro speed test', // progress-example-standard
      testName: 'appium pro speed test',
      batchName: 'appium pro speed test',
      browser: [
        {width: 1024, height: 768, name: 'firefox'},
        {width: 2048, height: 1024, name: 'firefox'},
        {width: 1900, height: 1800, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        {width: 2048, height: 1024, name: 'chrome'},
        {width: 1900, height: 1800, name: 'chrome'},
      ]
    })

    cy.eyesCheckWindow('Homepage')

    cy.visit(`https://appiumpro.com/about`);
    cy.eyesCheckWindow('About')
    cy.visit(`https://appiumpro.com/contact`);
    cy.eyesCheckWindow('Contact us')

    const editionList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    for (let editionNum of editionList) {
      cy.visit(`https://appiumpro.com/editions/${editionNum}`);
      cy.eyesCheckWindow(`edition ${editionNum} - site`);

      cy.visit(`https://appiumpro.com/newsletter/${editionNum}`);
      cy.eyesCheckWindow(`edition ${editionNum} - newsletter`);
    }

  })
})
