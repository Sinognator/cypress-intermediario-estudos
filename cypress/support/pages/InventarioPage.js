class InventarioPage {
  validarItemVisivel(nomeDoItem) {
    cy.get('[data-test="inventory-item-name"]')
    .should('contain', nomeDoItem)
  }

  adicionarItemAoCarrinho(nomeDoItem) {
    cy.contains('.inventory_item_name', nomeDoItem)
    .parents('.inventory_item_description')
    .within(() => {
    cy.get('button').should('have.text', 'Add to cart').click();
    cy.get('button').should('have.text', 'Remove');
  });
  }

  clicarNoCarrinho() {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart');

  }
}

export default new InventarioPage();
