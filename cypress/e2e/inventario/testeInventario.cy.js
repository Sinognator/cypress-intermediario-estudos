import LoginPage from '../../support/pages/LoginPage';
import InventarioPage from '../../support/pages/InventarioPage';

describe('Inventário', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();
    LoginPage.validarLoginComSucesso();
  });

  it('Deve validar item Sauce Labs Backpack visível', () => {
    InventarioPage.validarItemVisivel('Sauce Labs Backpack');
    InventarioPage.adicionarItemAoCarrinho('Sauce Labs Backpack');
    InventarioPage.clicarNoCarrinho();
  });
  
});
