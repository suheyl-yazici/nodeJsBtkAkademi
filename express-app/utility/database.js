const mysql = require('mysql2');

const connection = mysql.createConnection({
    port: 3307,
    host:'localhost',
    user: 'root',
    database: 'node-app',
    password: 'mysql1234'
});


module.exports = connection.promise();
