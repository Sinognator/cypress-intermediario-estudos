import LoginPage from '../../support/pages/LoginPage';
import InventarioPage from '../../support/pages/InventarioPage';
import CartPage from '../../support/pages/CartPage';

describe('Carrinho de compras', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.preencherUsuario('standard_user');
    LoginPage.preencherSenha('secret_sauce');
    LoginPage.clicarLogin();
    LoginPage.validarLoginComSucesso();
  });

  it('Deve adicionar um item e validar no carrinho', () => {
    const produto = 'Sauce Labs Backpack';

    InventarioPage.adicionarItemAoCarrinho(produto);
    InventarioPage.clicarNoCarrinho();

    CartPage.validarItemNoCarrinho(produto);
  });

  it('Deve remover um item do carrinho', () => {
    const produto = 'Sauce Labs Backpack';

    InventarioPage.adicionarItemAoCarrinho(produto);
    InventarioPage.clicarNoCarrinho();

    CartPage.validarItemNoCarrinho(produto);
    CartPage.removerItem(produto);
  });
});
