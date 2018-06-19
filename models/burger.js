var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        orm.selectBurger('burgers', function(r){
            cb(r)
        })
    },
    new: function(objCol, objData, cb) {
        orm.insertBurger('burgers', objCol, objData, function(r){
            cb(r)
        })
    },
    devour: function(objCol, objData, conditionCol, conditionData, cb) {
        orm.updateBurger('burgers', objCol, objData, conditionCol, conditionData, function(r){
            cb(r)
        })
    }
}

module.exports = burger