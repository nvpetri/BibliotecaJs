/*******************************************************************
 * Objetivo: Fazer uma aplicação para controle de uma biblioteca   *
 * Objetivo individual: Realizar o cadastro do usuário             *
 * ❤️✈️ Autor: Nicolas Vasconcelos   ✈️❤️                        *
 * Data: 14/09/2023                                                *
 * Versão: 1.0                                                     *
 ******************************************************************/

const readline = require('readline')
const User = require('./user.js') 

class RegisterUser {
    constructor() {
        this.users = []
    }

    addUser() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        const user = new User('', '', '', '')

        rl.question("/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*\n" +
            "------------------Cadastro Usuário--------------------\n" +
            "/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*\n" +
            "Insira o nome do cliente: ", function (name) {
                user.name = name

                console.log("------------------------------------------------------")

                rl.question("Qual o endereço do cliente? ", function (address) {
                    user.address = address

                    console.log("------------------------------------------------------")

                    rl.question("Qual o número de telefone do cliente? ", function (telephone) {
                        user.telephone = telephone

                        console.log("------------------------------------------------------")

                        rl.question("Qual o email do cliente? ", function (mail) {
                            user.mail = mail
                            this.users.push(user)

                            console.log("------------------------------------------------------")

                            rl.question("Deseja cadastrar mais um cliente? (S/N): ", function (response) {
                                if (response.trim().toUpperCase() === "S") {
                                    rl.close()
                                    this.addUser()
                                } else {
                                    rl.close()
                                }
                            }.bind(this))
                        }.bind(this))
                    }.bind(this))
                }.bind(this))
            }.bind(this))
    }
}

module.exports = RegisterUser
