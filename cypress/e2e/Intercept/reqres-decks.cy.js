describe.only('Login com interceptação usando Reqres.in', () => {
  it('Testar a api shuffle', () => {
    cy.visit('cypress/fixtures/deck.html');
    cy.intercept('GET', '**/api/deck/new/shuffle/**').as('embaralha');
    cy.get('#criar-deck').click()
    cy.wait('@embaralha').its('response.statusCode').should('eq', 200);
  });

  it('Testar a api draw', () => {
    cy.visit('cypress/fixtures/deck.html');
    cy.intercept('GET', '**/api/deck/*/draw/**').as('compra');
    cy.get('#criar-deck').click()
    cy.get('#comprar-carta').click()
    cy.wait('@compra').its('response.statusCode').should('eq', 200);
  });

  it('Testar erro 401 na api shuffle', () => {
    cy.visit('cypress/fixtures/deck.html');
    cy.intercept('GET', '**/api/deck/new/shuffle/**', {
        statusCode: 401,
        body: { error: 'Unauthorized' }
        }).as('embaralha');
    cy.get('#criar-deck').click()
    cy.wait('@embaralha').its('response.statusCode').should('eq', 401);
  });

  it('Testar erro 401 na api draw', () => {
    cy.visit('cypress/fixtures/deck.html');

    cy.intercept('GET', '**/api/deck/new/shuffle/**', {
        statusCode: 401,
        body: { error: 'Unauthorized' }
        }).as('compra');

    cy.get('#criar-deck').click()
    cy.get('#comprar-carta').click()
    cy.wait('@compra').its('response.statusCode').should('eq', 401);
  });

  it('Testar retorno com carta mockada na api draw', () => {
    cy.visit('cypress/fixtures/deck.html');

    cy.intercept('GET', '**/api/deck/*/draw/**', {
        statusCode: 200,
        body: { 
            "success": true, 
            "deck_id": "fyqornbz8r5o", 
            "cards": [
                {"code": "JS", 
                    "image": "https://deckofcardsapi.com/static/img/JS.png", 
                    "images": {
                        "svg": "https://deckofcardsapi.com/static/img/JS.svg", 
                        "png": "https://deckofcardsapi.com/static/img/JS.png"
                    }, 
                    "value": "JACK", 
                    "suit": "SPADES"
                }
            ], 
            "remaining": 50

        }
        }).as('compra');

    cy.get('#criar-deck').click()
    cy.get('#comprar-carta').click()
    cy.wait('@compra').its('response.statusCode').should('eq', 200);
  });
  
  it('Testar retorno da api draq com retorno 500', () => {
    cy.visit('cypress/fixtures/deck.html');

    cy.intercept('GET', '**/api/deck/*/draw/**', {
        statusCode: 500}).as('erro');

    cy.get('#criar-deck').click()
    cy.get('#comprar-carta').click()
    cy.wait('@erro').its('response.statusCode')

    cy.get('#erro').should('contain', 'Erro ao comprar carta!')
  });

});