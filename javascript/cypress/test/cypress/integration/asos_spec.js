/// <reference types="cypress" />
describe('Asos', () => {
  it('random play', () => {
    cy.setCookie('auth', 'secret');
    // cy.visit('http://localhost:3000');

    const url = `https://test.asosservices.com/river-island/river-island-button-cowl-neck-jumper/prd/1775492?x-site-origin=envdev601.asosdevelopment.com`;
    cy.visit(url);

    const fixLinks = doc => {
      const switchHref = (doc, selector) => {
        const elem = doc.querySelector(selector);
        const newUrl = new URL(elem.href)
        newUrl.hostname = newUrl.hostname.replace('testresources', 'test')
        elem.href = newUrl.href;
      };

      [
        "#chrome-app-container > link[href^='//testresources.asosservices.com/productpage/Asos.']"
      ].forEach(link => {switchHref(doc, link)});
    };

    cy.document().then(doc => {
      fixLinks(doc);
    });

    cy.eyesOpen({
      appName: 'asos',
    });

    cy.get('.might-like > section > .layout-width > .layout-module > h2')
    cy.get(':nth-child(1) > .item > .card > .front > .btl-product-details > [data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"] > .product-image > .grid-row > img')
    cy.eyesCheckWindow();
    cy.eyesClose();
  });
});