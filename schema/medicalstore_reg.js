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
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    reg_date:{
        type: Date,
        required: true,
        default: Date.now,
    }
});
var MedicalStore = mongoose.model('MedicalStore', MedicalStoreSchema);
module.exports = MedicalStore;