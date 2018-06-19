var express = require('express')
var router = express.Router()
var burg = require('../models/burger.js')

router.get(',', function(req,res){
    res.redirect('/burger')
})

router.get('/burger', function(req,res){
    burg.all(function(data){
        var hbsObject = {burgers: data}
        console.log(hbsObject)
        res.render('index', hbsObject)
    })
})

router.post('/burger/create', function(req,res){
    burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function(data){
        res.redirect('/burger')
    })
})

router.put('/burger/update/:id', function(req,res){
    var condition = 'id = ' + req.params.id
    console.log('condition', condition)
    burger.update({'devoured' : req.body.devoured}, condition, function(data){
        res.redirect('/burger')
    })
})

// var controller = function(app) {
//     app.get('/', function(req,res){
//         burger.all(function(data){
//             res.render("index",{
//                 burgers: data
//             })
//         })
//     })

//     app.post('/', function(req,res){
//         burger.new('burger_name', req.body.burger, function(data){
//             res.redirect('/')
//             console.log(req.body.burger)
//         })
//     })

//     app.put('/', function(req,res){
//         burger.devour('devoured', 1, 'id', req.body.id, function(data){
//             res.redirect('/')
//         })
//     })
// }

module.exports = router