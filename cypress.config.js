const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true, // ✅ grava vídeos
  videoUploadOnPasses: true, // ✅ mantém os vídeos mesmo se o teste passar
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here, se precisar
    },
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
});
