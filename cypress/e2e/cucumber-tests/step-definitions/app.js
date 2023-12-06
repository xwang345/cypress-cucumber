import { defineStep } from 'cypress-cucumber-preprocessor/steps';

defineStep('I open example page', () => {
    cy.visit("https://www.example.com");
});

defineStep('I see page title {string}', (name) => {
    cy.get('h1').should('be.visible');
    cy.get('h1').should('contain', `${name}`);
});

defineStep('check that title is correct', () => {
    cy.get('p').should('be.visible');
 });