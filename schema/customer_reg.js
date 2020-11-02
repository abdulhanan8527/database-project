var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    phone:{
        type: string,
        required: true
    },
    address:{
        type: string,
        required: true,
    }
});
var Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;