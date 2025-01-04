const { I } = inject();

module.exports = {

  // insert your locators and methods here

  buttons:{
    btnBiblia: '#devandroid.muller.bibliasagrada:id/imgBiblia',
    btnBack: '#devandroid.muller.bibliasagrada:id/imgBack',
    btnHinario: '#devandroid.muller.bibliasagrada:id/imgHinario',
  },

  spinners:{
    spnLivros: '#devandroid.muller.bibliasagrada:id/spinnerLivros',
    spnHinos: '#devandroid.muller.bibliasagrada:id/spinnerHinos',
  },

  labels:{
    lblHarpaCrista: '#devandroid.muller.bibliasagrada:id/txtTitulo',
    lblSelecioneUmHino: '#devandroid.muller.bibliasagrada:id/txtNomeDoHino',
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
    I.tap(this.buttons.btnBiblia)
    I.waitForElement(this.spinners.spnLivros, 5)
    I.seeElement(this.spinners.spnLivros)
  },

  clicarNoSpinnerLivros(){
    I.waitForElement(this.spinners.spnLivros, 5)
    I.tap(this.spinners.spnLivros)
  },

  voltarTelaViaBotaoBack(){
    I.waitForElement(this.buttons.btnBack, 5)
    I.tap(this.buttons.btnBack)
  },

  acessarHinario(){
    I.waitForElement(this.buttons.btnHinario, 5)
    I.tap(this.buttons.btnHinario)
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
    I.tap(this.spinners.spnHinos)
  },

  voltarNativo(){
    I.sendDeviceKeyEvent(4)
  },
  
}
