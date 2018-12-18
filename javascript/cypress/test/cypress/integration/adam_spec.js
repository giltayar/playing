describe.skip('Hello world', () => {
  it('works', () => {
    cy.visit('https://applitools.com');

    cy.eyesOpen({
        appName: 'https://applitools.com',
        testName: 'https://applitools.com',
        browser: [
            { name: 'chrome', width: 520, height: 600 },
            { name: 'chrome', width: 800, height: 600 },
            { name: 'chrome', width: 1024, height: 768 },
            { name: 'firefox', width: 520, height: 600 },
            { name: 'firefox', width: 800, height: 600 },
            { name: 'firefox', width: 1024, height: 768 },
            { name: 'chrome', deviceName: 'iPhone X' },
            { name: 'chrome', deviceName: 'Nexus 5' },
            { name: 'chrome', deviceName: 'Nexus 4' },
            { name: 'chrome', deviceName: 'Nexus 6' },
        ]
    });

    cy.eyesCheckWindow({ tag: 'Home Page' });
    cy.contains('GET STARTED').click();
    cy.eyesCheckWindow({ tag: 'Start a free trial' });
    cy.eyesClose();
  });
});