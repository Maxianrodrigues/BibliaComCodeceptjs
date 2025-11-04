const elementosDeTela_page = require("../pages/elementosDeTela_page")
Feature('moduloDevocional');

const{I} = inject()

Scenario('VALIDACAO MODULO DEVOCIONAL',  ({ I }) => {
    elementosDeTela_page.acessarModuloDevocional()
    elementosDeTela_page.aumentarZoomFonteDevocional()
    elementosDeTela_page.diminuirZoomFonteDevocional()
    elementosDeTela_page.compartilharDevocional()
    elementosDeTela_page.voltarTelaViaBotaoBack()
});
