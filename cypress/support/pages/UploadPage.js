class UploadPage{
    abrirUploadPage(){
        cy.visit('https://the-internet.herokuapp.com/upload')
    }

    uploadDeArquivo(){
        cy.get('#file-upload').selectFile('cypress/fixtures/usuarios.json')
    }
    acionarBotaoUpload(){
        cy.get('#file-submit').click()
    }
    validarEnvioDoArquivo(){
        cy.get('h3').should('be.visible').should('contain.text', 'File Uploaded!')
    }
}
export default new UploadPage();