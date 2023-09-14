/*******************************************************************
 * Objetivo: Fazer uma aplicação para controle de uma biblioteca   *
 * Objetivo individual: Definir os dados do usuário,servindo apenas*
 * como um construtor                                              *
 * ❤️✈️ Autor: Nicolas Vasconcelos   ✈️❤️                        *
 * Data: 14/09/2023                                                *
 * Versão: 1.0                                                     *
 ******************************************************************/

class User {
  constructor(name, address, mail, telephone) {
      this.name = name
      this.address = address
      this.mail = mail
      this.telephone = telephone
  }
}

module.exports = User
