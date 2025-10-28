const elementosDeTela_page = require("../pages/elementosDeTela_page");

Feature('moduloBiblia');


const{I} = inject()

Scenario('Validacao modulo biblia',  async ({ I }) => {
    elementosDeTela_page.acessarBiblia()
    elementosDeTela_page.aumentarZoomFonteDevocional()
    elementosDeTela_page.diminuirZoomFonteDevocional()
    elementosDeTela_page.clicarNoSpinnerLivros()
    elementosDeTela_page.voltarViaBackButtonEvent()
    elementosDeTela_page.clicaNoSpinnerCapitulos()
    elementosDeTela_page.voltarViaBackButtonEvent()
    elementosDeTela_page.clicaNoSpinnerBibliasVersoes()
    elementosDeTela_page.voltarViaBackButtonEvent()
    elementosDeTela_page.reproduzCapitulo()
    elementosDeTela_page.stopReproducao()
    elementosDeTela_page.destacarCapitulo()
    elementosDeTela_page.abrirDialogComentario()
    elementosDeTela_page.cancelarComentario()
    elementosDeTela_page.abrirDialogComentario()
    elementosDeTela_page.preencherComentario('TESTE AUTOMACAO MAX')
    elementosDeTela_page.salvarComentario()
    elementosDeTela_page.avancarPagina()
    elementosDeTela_page.retrocedePagina()
    await elementosDeTela_page.marcarCapitulComoLido()
});
