import UploadPage from '../../support/pages/UploadPage';

describe('Upload page', () => {
  
  it('Deve fazer upload de um arquivo com sucesso', () => {
    UploadPage.abrirUploadPage()
    UploadPage.uploadDeArquivo()
    UploadPage.acionarBotaoUpload()
    UploadPage.validarEnvioDoArquivo()
  })
});