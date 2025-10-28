const elementosDeTela_page = require("../pages/elementosDeTela_page");
Feature('moduloHinario');

const {I} = inject()

Scenario('Validacao modulo hinario',  async ({ I }) => {
    elementosDeTela_page.acessarHinario()
    elementosDeTela_page.aumentarZoomFonteDevocional()
    elementosDeTela_page.diminuirZoomFonteDevocional()
    elementosDeTela_page.clicarNoSpinnerHinarios()
    elementosDeTela_page.selecionarHinarioHc()
    elementosDeTela_page.clicarNoSpinnerHino()
    elementosDeTela_page.selecionaHinoQualquer()
    elementosDeTela_page.preencherNumeroHino('160')
    elementosDeTela_page.validarTextoTituloHino('Deus Nos Quis Salvar')
    await elementosDeTela_page.marcarHinoFavorito()
    elementosDeTela_page.avancarPaginaHinos()
    elementosDeTela_page.retrocedePaginaHinos()
    elementosDeTela_page.voltarViaBotaoBack()
});
