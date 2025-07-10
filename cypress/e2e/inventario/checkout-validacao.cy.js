import LoginPage from '../../support/pages/LoginPage';
import InventarioPage from '../../support/pages/InventarioPage';
import CartPage from '../../support/pages/CartPage';
import CheckoutPage from '../../support/pages/CheckoutPage';

describe('Carrinho de compras', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();
    LoginPage.validarLoginComSucesso();
    const produto = 'Sauce Labs Backpack';

    InventarioPage.adicionarItemAoCarrinho(produto);
    InventarioPage.clicarNoCarrinho();

    CartPage.validarItemNoCarrinho(produto);
    CartPage.clicarEmCheckout();
    
  });

  it('Tentar continuar sem preencher nenhum campo', () => {
    CheckoutPage.clicarEmContinuar()
    cy.get('[data-icon="times-circle"]').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible').should('contains.text', 'Error: First Name is required')
    
  })

  it('Preencher apenas o primeiro nome', () => {
    CheckoutPage.preencherNome('Paulo')
    CheckoutPage.clicarEmContinuar()
    cy.get('[data-icon="times-circle"]').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible').should('contains.text', 'Error: Last Name is required')
    
  })

  it('Preencher primeiro nome e sobrenome, mas deixar o CEP vazio', () => {
    CheckoutPage.preencherNome('Paulo')
    CheckoutPage.preencherSobrenome('')
    CheckoutPage.clicarEmContinuar()
    cy.get('[data-icon="times-circle"]').should('be.visible')
    cy.get('[data-test="error"]').should('be.visible').should('contains.text', 'Error: Postal Code is required')
    
  })

});
