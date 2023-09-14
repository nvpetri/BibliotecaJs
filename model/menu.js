/*******************************************************************
 * Objetivo: Fazer uma aplicação para controle de uma biblioteca   *
 * Objetivo individual: Menu, permite a entrada de alguns dados e  *
 * gerencia outras classes que serão criadas, primeira interface.  *
 * ❤️✈️ Autor: Nicolas Vasconcelos   ✈️❤️                        *
 * Data: 14/09/2023                                                *
 * Versão: 1.0                                                     *
 ******************************************************************/

const readline = require('readline')
const RegisterUser = require('./registerUser')
const registerUser = new RegisterUser()

var teclado = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function startMenu(){

        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");
        console.log("---------------- Bem Vindo ----------------");
        console.log("******* Escolha uma das opções: ***********");
        console.log("********************* [1] - Cadastrar Usuário");
        console.log("********************* [2] - Cadastrar Livro");
        console.log("********************* [3] - Usuários Cadastrados");
        console.log("********************* [4] - Livros Cadastrados");
        console.log("********************* [5] - Realizar Empréstimos");
        console.log("********************* [6] - Livros Emprestados");
        console.log("********************* [7] - Devolução de Livros");
        console.log("********************* [8] - Sair");
        console.log("-------------------------------------------");
        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/");

        teclado.question('Escolha uma opção: ', function (input) {
            userOption = parseInt(input)

         switch (userOption){
            case 1:
                registerUser.addUser()
                break
            case 2:
                break
            case 3:
                break
            case 4:
                break
            case 5:
                break
            case 6:
                break
            case 7:
                break
            case 8:
                break
            default:
                console.log('Erro: Opção inválida. Tente novamente!')
        }
    })
}

module.exports = {
    startMenu
}