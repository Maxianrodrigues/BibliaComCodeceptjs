Funcionalidade('abrirApp');

const{I, elementosDeTela_page} = inject()

Cenário('Navegando entre modulos biblia e hinario @test',  ({ I }) => {
    elementosDeTela_page.acessarBiblia()
    elementosDeTela_page.voltarTelaViaBotaoBack()
    elementosDeTela_page.acessarHinario()
});
