const mysql = require('mysql');
const db = mysql.createConnection({


    host: 'localhost',
    user: 'root',
    password: 'password',
    //     database:'currentdb'
    database: 'prac'

});





db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('DB connect');
    }
});




module.exports = db;