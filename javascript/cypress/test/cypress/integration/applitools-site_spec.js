describe('Applitools site', () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'website',
      testName: 'applitools.com',
      serverUrl: process.env.APPLITOOLS_SERVER_URL,
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
      console.log('@@@GIL all urls', urls)
      urls.slice(0, 30).forEach((url, i) => {
        // if (url !== 'https://applitools.com/features/test-automation') return

        console.log('@@@GIL checking', i, url)

        cy.visit(url).then(() => console.log('@@@GIL visited', i, url));
        cy.eyesCheckWindow(url).then(() => console.log('@@@GIL checked', i, url));
      });
    });
  });

  afterEach(() => {
    // cy.eyesClose({timeout: 720000});
    console.log('@@@GIL after each!')
  });
});