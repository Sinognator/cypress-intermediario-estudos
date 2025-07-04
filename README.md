## 🧪 Projeto de Estudos com Cypress
Este projeto tem como objetivo explorar e aplicar testes automatizados com Cypress de forma estruturada, utilizando boas práticas como:

- Page Object Model (POM)
- Comandos customizados
- Separação de dados via fixtures
- Interceptação de requisições HTTP
- Organização de testes por funcionalidades

## 📁 Estrutura de Pastas

```plaintext
cypress/
├── e2e/                    # Arquivos de testes organizados por funcionalidade
│   ├── login/
│   │   └── login.cy.js
│   └── inventario/
│       └── inventario.cy.js

├── fixtures/               # Massa de dados e arquivos estáticos
│   ├── usuarios.json
│   └── deck.html

├── support/                # Arquivos de suporte aos testes
│   ├── commands.js         # Comandos globais (cy.login, cy.logout, etc.)
│   ├── e2e.js              # Arquivo de setup do Cypress (executado antes de cada teste)
│   └── pages/              # Page Objects (modelagem de telas)
│       └── LoginPage.js
```

## 🚀 Comandos disponíveis

> npx cypress open     # Abre o Cypress Test Runner

> npx cypress run      # Executa os testes em modo headless

## 🧰 Tecnologias utilizadas
- Cypress 12+

- GitHub Actions (para CI)

- HTML local (ex: deck.html) para simulação de testes com API