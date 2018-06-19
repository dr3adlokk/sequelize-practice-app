var config = require("../config/connection.js")

var orm = {
    selectBurger: function(table, cb) {
        var queryString = "SELECT * FROM ??"
        config.query(queryString, [table], function(e,r){
            if(e) throw e
            cb(r)
        })
    },
    insertBurger: function(table, objCol, objData, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?);"
        config.query(queryString, [table, objCol, objData], function(e,r){
            if(e) throw e
            cb(r)
        })
    },
    updateBurger: function(table, objCol, objData, conditionCol, conditionData, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?"
        config.query(queryString, [table, objCol, objData, conditionCol, conditionData], function(e,r){
            if(e) throw e
            cb(r)
        })
    }   
}

module.exports = orm