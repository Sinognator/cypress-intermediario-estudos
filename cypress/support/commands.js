import LoginPage from './pages/LoginPage';
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
Cypress.Commands.add('login', (user, pw) => {
    LoginPage.preencherUsuario(user)
    LoginPage.preencherSenha(pw)
    LoginPage.clicarLogin()

    // cy.url().should('include', '/inventory')
})

Cypress.Commands.add('logout', () => {
    cy.get('[id="react-burger-menu-btn"]').should('be.visible').click()
    cy.get('[data-test="logout-sidebar-link"]').should('be.visible').click()
    cy.get('[data-test="login-button"]').should('be.visible')
})