const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');


describe("Testar as funções de Gestão de Usuários", () => {

    it("Validar que posso adicionar um novo nome de usuário na lista", () => {
        //Adiciona um novo nome na lista
        adicionarNovoUsuario("Pedro");

        //Retornar a Lista de usuários na caixa Lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //Comparar se o novo nome está no final da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal("Pedro");
        
    });

});
