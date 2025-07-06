class CartPage {
  validarItemNoCarrinho(nomeDoItem) {
    cy.get('[data-test="inventory-item-name"]')
    .should('contain', nomeDoItem)
  }

  removerItem(nomeDoItem) {
    cy.contains('.inventory_item_name', nomeDoItem)
    .parents('.cart_item_label')
    .find('button')
    .click()
    cy.contains(nomeDoItem).should('not.exist')
  }
}

export default new CartPage();
