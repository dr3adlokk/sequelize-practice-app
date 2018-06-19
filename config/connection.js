var mysql = require('mysql2')

var config = mysql.createConnection({
    port: 3000,
    host: "localhost",
    use: "root",
    password: "root",
    database: "burgers_db"
})

config.connect(function(e){
    if(e) {
        console.log("error", e.stack)
    }
    console.log("Connected as id: " + config.threadId)
})

// config.query("SELECT * FROM burgers", function(e,rows, fields){
//     if(e) throw e
//     console.log("The burger connection test:" + rows[0].burger_name)
// })