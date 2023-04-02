const mysql = require("mysql")
const Dbs = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
}
const connection = mysql.createConnection(Dbs)

connection.connect()
    // //查询
    // connection.query(`sql`, (err, rows, fields) => {
    //     if (err) throw err
    //     console.log(rows)
    // })
    //
    //
    // connection.end()
module.exports = connection