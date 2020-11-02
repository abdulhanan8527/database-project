var mongoose = require('mongoose');
var MedicalStoreSchema = new mongoose.Schema({
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
var MedicalStore = mongoose.model('MedicalStore', MedicalStoreSchema);
module.exports = MedicalStore;