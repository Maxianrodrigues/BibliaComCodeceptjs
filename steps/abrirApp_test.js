Funcionalidade('abrirApp');

const{I, elementosDeTela_page} = inject()

Cenário('Navegando entre modulos biblia e hinario @test',  ({ I }) => {
    elementosDeTela_page.acessarBiblia()
    elementosDeTela_page.voltarTelaViaBotaoBack()
    elementosDeTela_page.acessarHinario()
    elementosDeTela_page.voltarTelaViaBotaoBack()
    elementosDeTela_page.acessarModuloDevocional()
    elementosDeTela_page.visualizaLabelDevocional()
    elementosDeTela_page.aumentarZoomFonteDevocional()
    elementosDeTela_page.diminuirZoomFonteDevocional()
    elementosDeTela_page.compartilharDevocional()
    elementosDeTela_page.voltarTelaViaBotaoBack()
});
