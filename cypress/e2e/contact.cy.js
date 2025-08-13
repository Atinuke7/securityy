describe("Filling the contact form", () => {
  beforeEach(() => {
     cy.visit('https://securityy.vercel.app/')
    // cy.visit(" http://localhost:3000"); we are supposed to take it out after testig locally or after testing on our local device but we are leaving it here for referencing puposes.
    cy.contains("Contact", { timeout: 6000 }).click();
  });
  it("Submitting with only the name", () => {
    cy.get(".name-input").type("Atinuke");
    cy.contains("Submit").click();
    cy.contains(" FOR ENQUIRES!", { timeout: 15000 }).should("be.visible");
  });

  it("Submitting with the name and email input filed", () => {
    cy.get(".name-input").type("Atinuke");
    cy.get(".email-input").type("atinuke@gmail.com");
    //   cy.contains('Submit').click()
    cy.get(".button-primary").click();
    cy.contains(" FOR ENQUIRES!", { timeout: 15000 }).should("be.visible");
  });

  it("Submitting with all fields filled", () => {
    cy.get(".name-input").type("Atinuke");
    cy.get(".email-input").type("atinuke@gmail.com");
    cy.get(".text-input").type("hello joy");
    cy.get(".button-primary").click();
    cy.contains(" FOR ENQUIRES!", { timeout: 15000 }).should("be.visible");
  });
});
