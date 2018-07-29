describe('Applitools site', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'website',
      testName: 'Everything',
      browser: [
        { width: 320, height: 1000 },
        { width: 480, height: 1000 },
        { width: 768, height: 1000 },
        { width: 992, height: 1000 },
        { width: 1200, height: 1000 },
      ],
      showLogs: true,
    });
  });

  it('Single test', () => {
    cy.task('getUrls').then(urls => {
      urls.forEach(url => {
        cy.visit(url);
        cy.eyesCheckWindow(url);
      });
    });
  });

  afterEach(() => {
    cy.eyesClose({timeout: 720000});
  });
});