const mysql = require('mysql2/promise.js');
require ('dotenv').config();


/*
Teste para verificar se variáveis de ambiente estão sendo retornadas

console.log(process.env.MYSQL_HOST);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_PORT);
console.log(process.env.MYSQL_DATABASE);*/

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE
});

module.exports = connection;