class LoginPage {
  visit() {
    cy.visit('https://www.saucedemo.com/');
  }

  preencherUsuario(usuario) {
    cy.get('[data-test="username"]').type(usuario);
  }

  preencherSenha(senha) {
    cy.get('[data-test="password"]').type(senha);
  }

  clicarLogin() {
    cy.get('[data-test="login-button"]').click();
  }

  validarLoginComSucesso() {
    cy.url().should('include', '/inventory');
  }

  validarErroDeLogin() {
    cy.get('[data-test="error"]').should('be.visible');
  }
}

export default new LoginPage();
