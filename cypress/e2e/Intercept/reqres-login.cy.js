describe('Login com interceptação usando Reqres.in', () => {
  it('Deve interceptar a requisição de login', () => {
    cy.intercept('POST', 'https://reqres.in/api/login').as('login');

    cy.visit('./src/login.html');

    cy.get('#email').type('eve.holt@reqres.in');
    cy.get('#password').type('cityslicka');
    cy.get('button').click();

    cy.wait('@login').its('response.statusCode').should('eq', 200);
  });
});
