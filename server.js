var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
var methodOverride = require('method-override')
var morgan = require('morgan')
var expresshbs = require('express-handlebars')

var app = express()

//midddleware
// middleware
app.use(morgan('dev'))
app.engine('hbs', expresshbs({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())



var routes = require('./controllers/burgers_controller.js')
app.use('/', routes)

var port = process.env.port || 5000
app.listen(port)
console.log('Served To ', + port)
