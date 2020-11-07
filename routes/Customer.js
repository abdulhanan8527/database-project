const express = require('express')
const router = express.Router()

const AuthCustomer = require('../controllers/AuthCustomer')

router.get('/registration', function(req, res, next){
    res.render('customer_reg.ejs')
})
router.get('/', function(req, res, next){
    res.render('customer.ejs')
})
router.get('/login', function(req, res, next){
    res.render('customer_login.ejs')
})
router.post('/registration', AuthCustomer.register)
router.post('/login', AuthCustomer.login)
module.exports = router