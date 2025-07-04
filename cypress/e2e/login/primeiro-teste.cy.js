import LoginPage from '../support/pages/LoginPage';


describe.only('Login no SauceDemo', () => {
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.preencherUsuario('standard_user')
    LoginPage.preencherSenha('secret_sauce')
    LoginPage.clicarLogin()
    LoginPage.validarLoginComSucesso()
  })
  

  it('Logout', () => {
    cy.logout()
  })
});
