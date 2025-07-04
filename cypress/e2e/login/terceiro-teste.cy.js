describe('Login com dados do fixture', () => {
  let dados;

  before(() => {
    cy.fixture('usuarios').then((conteudo) => {
      dados = conteudo;
    });
  });

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Login válido', () => {
    cy.login(dados.valido.usuario, dados.valido.senha);
    cy.get('.inventory_list').should('be.visible');
  });

  it('Login bloqueado', () => {
    cy.login(dados.bloqueado.usuario, dados.bloqueado.senha);
    cy.get('[data-test="error"]')
      .should('be.visible')
      .should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
  });
});
