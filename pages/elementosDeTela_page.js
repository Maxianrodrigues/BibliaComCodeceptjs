const { I } = inject();

module.exports = {

  // insert your locators and methods here

  buttons:{
    btnBiblia: '#devandroid.muller.bibliasagrada:id/imgBiblia',
    btnBack: '#devandroid.muller.bibliasagrada:id/imgBack',
    btnHinario: '#devandroid.muller.bibliasagrada:id/imgHinario',
    btnDevocional: '#devandroid.muller.bibliasagrada:id/imgDevocional',
    btnZoomMais: '#devandroid.muller.bibliasagrada:id/imgZoomMais',
    btnZoomMenos: '#devandroid.muller.bibliasagrada:id/imgZoomMenos',
    btnShareWhatsApp: '#devandroid.muller.bibliasagrada:id/imgShareWhatsapp',
    btnLeituraVerisculoDoDia: '#devandroid.muller.bibliasagrada:id/imgLeitura',
  },

  spinners:{
    spnLivros: '#devandroid.muller.bibliasagrada:id/spinnerLivros',
    spnHinos: '#devandroid.muller.bibliasagrada:id/spinnerHinos',
  },

  labels:{
    lblHarpaCrista: '#devandroid.muller.bibliasagrada:id/txtTitulo',
    lblSelecioneUmHino: '#devandroid.muller.bibliasagrada:id/txtNomeDoHino',
    lblTituloDevocional: '#devandroid.muller.bibliasagrada:id/txtDevocionalDoDia',
  },

  acessarBiblia(){
    I.waitForElement(this.buttons.btnBiblia, 5)
    I.seeElement(this.buttons.btnBiblia)
    /*I.touchPerform([
      {
        action: 'tap',
        options: {
          element: (this.buttons.btnBiblia) // Substitua pelo seu elemento válido
        }
      }
    ]);*/
    I.click(this.buttons.btnBiblia)
    I.waitForElement(this.spinners.spnLivros, 5)
    I.seeElement(this.spinners.spnLivros)
  },

  clicarNoSpinnerLivros(){
    I.waitForElement(this.spinners.spnLivros, 5)
    I.click(this.spinners.spnLivros)
  },

  voltarTelaViaBotaoBack(){
    I.waitForElement(this.buttons.btnBack, 5)
    I.click(this.buttons.btnBack)
  },

  acessarHinario(){
    I.waitForElement(this.buttons.btnHinario, 5)
    I.click(this.buttons.btnHinario)
  },

  validarLabelHarpa(){
    I.waitForElement(this.labels.lblHarpaCrista, 5)
  },

  validarLabelSelecioneHino(){
    I.waitForElement(this.labels.lblSelecioneUmHino, 5)
    I.seeElement(this.labels.lblSelecioneUmHino)
  },

  clicarNoSpinnerHino(){
    I.waitForElement(this.spinners.spnHinos, 5)
    I.click(this.spinners.spnHinos)
  },

  voltarNativo(){
    I.sendDeviceKeyEvent(4)
  },

  acessarModuloDevocional(){
    I.waitForElement(this.buttons.btnDevocional, 5)
    I.seeElement(this.buttons.btnDevocional)
    I.click(this.buttons.btnDevocional)
  },

  visualizaLabelDevocional(){
    I.waitForElement(this.labels.lblTituloDevocional, 5)
    I.seeElement(this.labels.lblTituloDevocional) 
  },

  aumentarZoomFonteDevocional(){
    I.waitForElement(this.buttons.btnZoomMais, 5)
    I.seeElement(this.buttons.btnZoomMais)
    I.click(this.buttons.btnZoomMais)
    I.click(this.buttons.btnZoomMais) 
    I.click(this.buttons.btnZoomMais) 
    I.click(this.buttons.btnZoomMais) 
    I.saveScreenshot('aumentarZoom.png') 
  },

  diminuirZoomFonteDevocional(){
    I.waitForElement(this.buttons.btnZoomMenos, 5)
    I.seeElement(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.click(this.buttons.btnZoomMenos)
    I.saveScreenshot('diminuirZoom.png')
  },

  compartilharDevocional(){
    I.waitForElement(this.buttons.btnShareWhatsApp, 5)
    I.seeElement(this.buttons.btnShareWhatsApp)
    I.click(this.buttons.btnShareWhatsApp)
    I.saveScreenshot('compartilharDevocional.png')
    I.wait(3)
    I.sendDeviceKeyEvent(4)
  },

  voltarViaBotaoBack(){
    I.waitForElement(this.buttons.btnBack, 5)
    I.seeElement(this.buttons.btnBack)
    I.click(this.buttons.btnBack)
  }


  
}
