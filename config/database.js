var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'weather'
})  



connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('mysql database is connected');
       
    }
}) 



module.exports = connection;