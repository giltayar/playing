/* globals describe,it,cy */

const url =
  "https://app.safetyculture.io/template-editor/template_9e315dd34d7c4a69a12c2af6014a812b?step=build&platform=web";
const testName = url;

describe("Hello world", () => {
  it("works", () => {
    cy.eyesOpen({
      appName: "CypressPlay",
      testName: testName,
      browser: [
        { width: 1270, height: 950, name: "chrome" }
        // {width: 1270, height: 768, name: 'firefox'},
      ]
    });

    cy.visit(url);
    cy.get("#email").type("daniel.schwartz@applitools.com");
    cy.get(
      "html body.login-page div.content-container div.login-modal.modal div.login-modal-left div.modal-body form#form-login button#submit.modal-button"
    ).click();
    cy.get(
      "html body.login-page div.content-container div.login-modal.modal div.login-modal-left div.modal-body form#form-login div.modal-input-container.pwd-section input#password.modal-input"
    ).type("F9xCWvJpgZrZJnp");
    cy.get(
      "html body.login-page div.content-container div.login-modal.modal div.login-modal-left div.modal-body form#form-login button#submit.modal-button"
    ).click();
    cy.wait(8000);

    cy.eyesCheckWindow({
      tag: "Play Check",
      saveCdt: true
    });

    cy.eyesClose();
  });
});
