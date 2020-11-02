if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const port = 3000

const express = require('express')
const app = express()
const flash = require('express-flash')
const session = require('express-session')

const users = []

app.use(express.json())
app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(express.static(__dirname + '/public'))

app.get('/customer/registration', function(req, res){
    res.render('customer_reg.ejs')
})
app.get('/deliveryboy/registration', function(req, res){
    res.render('deliveryboy_reg.ejs')
})
app.get('/medicalstore/registration', function(req, res){
    res.render('deliveryboy_reg.ejs')
})
app.get('/welcome', function(req, res){
    res.render('welcome.ejs')
})
app.get('/customer', function(req, res){
    res.render('customer.ejs')
})
app.get('/deliveryboy', function(req, res){
    res.render('deliveryboy.ejs')
})
app.get('/medicalstore', function(req, res){
    res.render('medicalstore.ejs')
})
app.listen(port);

console.log('Now the server is running on url: https://127.0.0.1:3000')