require('dotenv').config(); 
const env = process.env; 
const mysql = require('mysql'); 

let mysqlConnection = mysql.createConnection({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database, 
});

mysqlConnection.connect((err) => {
    if(!err){console.log('Database Connected') }
    else{ console.log(`Connection failed - ${err}`)}
}); 

module.exports = mysqlConnection; 