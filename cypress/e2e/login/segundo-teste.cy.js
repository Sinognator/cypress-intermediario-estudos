import LoginPage from '../../support/pages/LoginPage';
import PageLogin from '../../support/pages/LoginPage'
describe.only('Login no SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit()
  })
  
  it('Um que faz login, valida um item do inventário e faz logout', () =>{
    cy.login('standard_user', 'secret_sauce')

    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
    .should('have.text', 'Sauce Labs Backpack')
  })

  it('Outro que tenta logar com usuário bloqueado e valida a mensagem de erro', () =>{
    cy.login('locked_out_user', 'secret_sauce')
    
    cy.get('[data-test="error"]')
    .should('be.visible')
    .should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
  })
});
