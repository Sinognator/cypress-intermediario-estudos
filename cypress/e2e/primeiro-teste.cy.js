describe.only('Login no SauceDemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    cy.login('standard_user', 'secret_sauce')

    cy.get('.inventory_list').should('be.visible')
  })
  

  it('Logout', () => {
    cy.logout()
  })
});
