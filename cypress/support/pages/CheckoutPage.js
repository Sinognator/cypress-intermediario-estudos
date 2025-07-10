class CheckoutPage {
  preencherDadosCheckout(nome, sobrenome, cep){
    cy.get('[data-test="firstName"]').should('be.visible').type(nome);
    cy.get('[data-test="lastName"]').should('be.visible').type(sobrenome);
    cy.get('[data-test="postalCode"]').should('be.visible').type(cep);
  }
  clicarEmContinuar(){
    cy.get('[data-test="continue"]').should('be.visible').click();
  }
  validarResumo()	{
    cy.get('[data-test="payment-info-label"]').should('be.visible').should('have.text', 'Payment Information:')
    cy.get('[data-test="payment-info-value"]').should('be.visible').should('contain.text', 'SauceCard #31337')

    cy.get('[data-test="shipping-info-label"]').should('be.visible').should('have.text', 'Shipping Information:')
    cy.get('[data-test="shipping-info-value"]').should('be.visible').should('have.text', 'Free Pony Express Delivery!')
    
    cy.get('[data-test="total-info-label"]').should('be.visible').should('have.text', 'Price Total')
    cy.get('[data-test="subtotal-label"]').should('be.visible').should('contain.text', 'Item total: $')
    cy.get('[data-test="tax-label"]').should('be.visible').should('contain.text', 'Tax: $')
    cy.get('[data-test="total-label"]').should('be.visible').should('contain.text', 'Total: $')
  }
  finalizarCompra(){
    cy.get('[data-test="finish"]').should('be.visible').should('have.text', 'Finish').click()
  }	
  validarConfirmacao(){
    cy.get('[data-test="complete-header"]')
    .should('have.text', 'Thank you for your order!')
    cy.get('[data-test="complete-text"]')
    .should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
  }	
}

export default new CheckoutPage();
