const bcrypt = require('bcryptjs')
const { renderFile } = require('ejs')
const jwt = require('jsonwebtoken')

const Customer = require('../schema/customer')

//register customer
const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10 , (err, hashedPassword) =>{
        if(err){
            res.json({
                message: "An Error Occured!"
            })
        }
        let customer = new Customer({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            address: req.body.address
        })
    
        customer.save()
        .then(user => {
            return res.redirect('/customer/login')
        })
        .catch(err =>{
            res.json({
                message: "Error => " + err
            })
        })
    })
}


//verfiy customer
const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Customer.findOne({$or: [{email:username},{username:username}]})
    .then(user =>{
        if(user){
            bcrypt.compare(password, user.password, function(err, result) {
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    return res.redirect('/customer/home')                 
                }
                else{
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }
        else{
            res.json({
                message: 'No Such User Found!'
            })
        }
    })
}

module.exports = {
    login, register
}
