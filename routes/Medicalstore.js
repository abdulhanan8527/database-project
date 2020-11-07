const express = require('express')
const router = express.Router()

const AuthMedicalstore = require('../controllers/AuthMedicalstore')

router.get('/registration', function(req, res , next){
    res.render('medicalstore_reg.ejs')
})
router.get('/', function(req, res , next){
    res.render('medicalstore.ejs')
})
router.get('/login', function(req, res , next){
    res.render('medicalstore_login.ejs')
})

router.post('/registration', AuthMedicalstore.register)
router.post('/login', AuthMedicalstore.login)
module.exports = router