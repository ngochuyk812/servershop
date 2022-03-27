const mysql2 = require('mysql2/promise')

const connect = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shopgiay',


})

connect.getConnection(function (err, conn) {
    if (err) {
        console.log(err);
    } else {
        console.log("Thanh Cong");
    }
})
module.exports = connect