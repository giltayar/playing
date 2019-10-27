/// <reference types="cypress" />

describe("Hello world", () => {
  it("works", () => {
    cy.visit("https://www.salesforce.com/uk/form/contact/contactme/");

    cy.eyesOpen({
      appName: "https://www.salesforce.com/uk/form/contact/contactme/",
      testName: "https://www.salesforce.com/uk/form/contact/contactme/"
    });

    // Wait on the page to load
    cy.location("pathname", { timeout: 10000 }).should("include", "/contactme");

    // Take a snapshot of the contact form
    cy.eyesCheckWindow("Contact Form");

    // Fill First Name
    cy.get('input[id="reg_form_1-UserFirstName"]')
      .clear()
      .type("John")
      .blur()
      .should("have.value", "John");

    // Fill Last Name
    cy.get('input[id="reg_form_1-UserLastName"]')
      .clear()
      .type("Smith")
      .should("have.value", "Smith");

    // Fill User Title
    cy.get('input[id="reg_form_1-UserTitle"]')
      .clear()
      .type("Senior Manager")
      .should("have.value", "Senior Manager");

    // Fill a email address
    cy.get('input[id="reg_form_1-UserEmail"]')
      .clear()
      .type("john.smith@gmail.com")
      .blur()
      .should("have.value", "john.smith@gmail.com");

    // Fill a Phone number
    cy.get('input[id="reg_form_1-UserPhone"]')
      .clear()
      .type("+1-202-555-0176")
      .should("have.value", "+1-202-555-0176");

    // Fill a Company Name
    cy.get('input[id="reg_form_1-CompanyName"]')
      .clear()
      .type("John Smith LTD")
      .should("have.value", "John Smith LTD");

    // Select number of employees
    cy.get('select[id="reg_form_1-CompanyEmployees"]')
      .select("3")
      .should("have.value", "3");

    // Select Country
    cy.get('select[id="reg_form_1-CompanyCountry"]')
      .select("US")
      .should("have.value", "US");

    // Select State
    cy.get('select[id="reg_form_1-CompanyState"]')
      .select("AZ")
      .should("have.value", "AZ");

    // Select Product/Interest
    cy.get('select[id="reg_form_1-Lead.Primary_Product_Interest__c"]')
      .select("Sales")
      .should("have.value", "Sales");

    // Fill the User Description
    cy.get('textarea[id="reg_form_1-UserDescription"]')
      .clear()
      .type("I am requesting a demo!")
      .should("have.value", "I am requesting a demo!");

    // Take a snapshot before submitting the form
    cy.eyesCheckWindow("Contact Form before submitting");

    // // Submit the form
    // cy.get('button[name="Submit"]').click();

    // // Wait on the page to load
    // cy.location("pathname", { timeout: 10000 }).should(
    //   "include",
    //   "/conf/contactme"
    // );

    // // Verify the message has went through
    // cy.get("h2")
    //   .contains("We'll be in touch")
    //   .should("be.visible", true);

    // // Take a snapshot of the contact form submission
    // cy.eyesCheckWindow("Contact Form Submission Results");
    cy.eyesClose();
  });
});
