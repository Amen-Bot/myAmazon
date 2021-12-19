// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('lauchSite', () => {
    cy.visit('/');
})

Cypress.Commands.add('helloAmen', (element) => {
    cy.get(element).should('be.visible').click();
})

Cypress.Commands.add('typeEmail', (element) =>{
    cy.get(element);
})

Cypress.Commands.add('clickContinue', (element) =>{
    cy.get(element);
})

Cypress.Commands.add('clickCookies', (element) =>{
    cy.get(element);
})

Cypress.Commands.add('typePassword', (element) =>{
    cy.get(element);

})

Cypress.Commands.add('clicksignInButton', (element) =>{
    cy.get(element);

})    