class DynamicPage{
    abrirDynamicPage(){
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1')
    }
    clicarStart(){
        cy.get('button')
        .should('be.visible')
        .and('contains.text', 'Start')
        .click()
        .should('not.be.visible')
    }
    validarLoading(){
        cy.get('#loading').should('be.visible')
        cy.get('#loading', {timeout: 10000}).should('not.be.visible')
        cy.get('#finish h4').should('be.visible').and('have.text', 'Hello World!');
    }
}
export default new DynamicPage();