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
    btnReproducao: '#devandroid.muller.bibliasagrada:id/imgReproduzir',
    btnStopReproducao: '#devandroid.muller.bibliasagrada:id/imgReproduzirOff',
    btnDestacarVersiculo: '#devandroid.muller.bibliasagrada:id/imgDestacar',
    btnAbriComentario: '#devandroid.muller.bibliasagrada:id/imgComentario',
    btnSim: '#android:id/button1',
    btnNao: '#android:id/button2',
    btnAvancaProximaPagina: '#devandroid.muller.bibliasagrada:id/imgSetaDireita',
    btnRetrocedePaginaAnterior: '#devandroid.muller.bibliasagrada:id/imgSetaEsquerda',
    btnAvancarPaginaHinos: '#devandroid.muller.bibliasagrada:id/imgSetaDireitaHino',
    btnRetrocedePaginaAnteriorHinos: '#devandroid.muller.bibliasagrada:id/imgSetaEsquerdaHino',
  },

  spinners:{
    spnLivros: '#devandroid.muller.bibliasagrada:id/spinnerLivros',
    spnHinos: '#devandroid.muller.bibliasagrada:id/spinnerHinos',
    spCapitulos: '#devandroid.muller.bibliasagrada:id/spinnerCapitulos',
    spVersoesBiblia: '#devandroid.muller.bibliasagrada:id/spinnerBiblias',
    spHinarios: '#devandroid.muller.bibliasagrada:id/spinnerHinarios',
  },

  labels:{
    lblHarpaCrista: '#devandroid.muller.bibliasagrada:id/txtTitulo',
    lblSelecioneUmHino: '#devandroid.muller.bibliasagrada:id/txtNomeDoHino',
    lblTituloDevocional: '#devandroid.muller.bibliasagrada:id/txtDevocionalDoDia',
    lblHinarioHC: '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="HC"]',
    lblHinoQualquer: '#android:id/text1',
  },

  fields:{
    fielDigiteComentario: '#devandroid.muller.bibliasagrada:id/editTextComentario',
    fieldDigiteNumeroHino: '#devandroid.muller.bibliasagrada:id/editBuscaId',
  },

  checkbox:{
    chkMarcarLido: '#devandroid.muller.bibliasagrada:id/chkLido',
    chkMarcarFavorito: '#devandroid.muller.bibliasagrada:id/chkFavorito',
  },

  acessarBiblia(){
    I.retry(2).waitForElement(this.buttons.btnBiblia, 5)
    I.seeElement(this.buttons.btnBiblia)
    I.click(this.buttons.btnBiblia)
    I.waitForElement(this.spinners.spnLivros, 5)
    I.seeElement(this.spinners.spnLivros)
  },

  clicarNoSpinnerLivros(){
    I.waitForElement(this.spinners.spnLivros, 5)
    I.click(this.spinners.spnLivros)
  },

  clicaNoSpinnerCapitulos(){
    I.waitForElement(this.spinners.spCapitulos, 5)
    I.click(this.spinners.spCapitulos)
  },

  clicaNoSpinnerBibliasVersoes(){
    I.waitForElement(this.spinners.spVersoesBiblia, 5)
    I.click(this.spinners.spVersoesBiblia)
  },

  clicarNoSpinnerHinarios(){
    I.waitForElement(this.spinners.spHinarios, 5)
    I.click(this.spinners.spHinarios)
  },

  selecionarHinarioHc(){
    I.waitForElement(this.labels.lblHinarioHC, 5)
    I.click(this.labels.lblHinarioHC)
  },

  selecionaHinoQualquer(){
    I.waitForElement(this.labels.lblHinoQualquer, 5)
    I.click(this.labels.lblHinoQualquer)
  },

  preencherNumeroHino(numeroHino){
    I.waitForElement(this.fields.fieldDigiteNumeroHino, 5)
    I.fillField(this.fields.fieldDigiteNumeroHino, numeroHino)
  },

  validarTextoTituloHino(tituloHino){
    I.see(tituloHino)
  },

  voltarTelaViaBotaoBack(){
    I.waitForElement(this.buttons.btnBack, 5)
    I.click(this.buttons.btnBack)
  },

  acessarHinario(){
    I.retry(2).waitForElement(this.buttons.btnHinario, 5)
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
  },


  voltarViaBackButtonEvent(){
    I.wait(3)
    I.sendDeviceKeyEvent(4)
  },

  reproduzCapitulo(){
    I.waitForElement(this.buttons.btnReproducao, 5)
    I.click(this.buttons.btnReproducao)
  },

  stopReproducao(){
    I.waitForElement(this.buttons.btnStopReproducao, 5)
    I.click(this.buttons.btnStopReproducao)
  },

  destacarCapitulo(){
    I.waitForElement(this.buttons.btnDestacarVersiculo, 5)
    I.click(this.buttons.btnDestacarVersiculo)
  },

  abrirDialogComentario(){
    I.waitForElement(this.buttons.btnAbriComentario, 5)
    I.click(this.buttons.btnAbriComentario)
    I.waitForElement(this.fields.fielDigiteComentario, 5)
  },

  preencherComentario(texto){
    I.fillField(this.fields.fielDigiteComentario, texto)
  },

  salvarComentario(){
    I.waitForElement(this.buttons.btnSim, 5)
    I.click(this.buttons.btnSim)
  },

  cancelarComentario(){
    I.waitForElement(this.buttons.btnNao, 5)
    I.click(this.buttons.btnNao)
  },

  avancarPagina(){
    I.waitForElement(this.buttons.btnAvancaProximaPagina, 5)
    I.click(this.buttons.btnAvancaProximaPagina)
  },

  retrocedePagina(){
    I.waitForElement(this.buttons.btnRetrocedePaginaAnterior, 5)
    I.click(this.buttons.btnRetrocedePaginaAnterior)
  },

  avancarPaginaHinos(){
    I.waitForElement(this.buttons.btnAvancarPaginaHinos, 5)
    I.click(this.buttons.btnAvancarPaginaHinos)
  },

   retrocedePaginaHinos(){
    I.waitForElement(this.buttons.btnRetrocedePaginaAnteriorHinos, 5)
    I.click(this.buttons.btnRetrocedePaginaAnteriorHinos)
  },

  async marcarCapitulComoLido(){

    I.waitForElement(this.checkbox.chkMarcarLido, 5)

    var valorCheckbox = await I.grabAttributeFrom(this.checkbox.chkMarcarLido, 'checked')
    console.log('valor do checkbox: ' + valorCheckbox)

    if (valorCheckbox === 'false') {

      I.say('MARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcarLido)
      
    }else{

      I.say('CHECKBOX JA MARCADO')
      I.say('DESMARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcarLido)
      I.wait(2)
      I.say('MARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcarLido)
    }

  },

  async marcarHinoFavorito(){

    I.waitForElement(this.checkbox.chkMarcarFavorito, 5)

    var valorCheckbox = await I.grabAttributeFrom(this.checkbox.chkMarcarFavorito, 'checked')
    console.log('valor do checkbox: ' + valorCheckbox)

    if (valorCheckbox === 'false') {

      I.say('MARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcarFavorito)
      
    }else{

      I.say('CHECKBOX JA MARCADO')
      I.say('DESMARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcchkMarcarFavoritoarLido)
      I.wait(2)
      I.say('MARCANDO CHECKBOX')
      I.click(this.checkbox.chkMarcarFavorito)
    }

  }

}
