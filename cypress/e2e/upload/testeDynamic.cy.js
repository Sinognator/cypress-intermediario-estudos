import DynamicPage from "../../support/pages/DynamicPage";

describe('Dynamic page', () => {
  
  it('Deve fazer validação de Elemento dinâmico', () => {
    DynamicPage.abrirDynamicPage();
    DynamicPage.clicarStart()
    DynamicPage.validarLoading()
  })
});