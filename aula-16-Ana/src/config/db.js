// Arquivo de configuração do banco de dados

const mysql = require('mysql2/promise'); // importando o mysql2 com suporte a promises

const db = mysql.createPool({
    host: 'localhost', // endereço do servidor mysql
    user: 'root',// usuario do banco
    password: '', // senha do banco
    database: 'banco_digital' //nome do banco
})

module.exports = db;  // exportando meu modulo para ser usado em outros arquivos