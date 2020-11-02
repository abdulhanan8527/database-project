var mongoose = require('mongoose');
var CartSchema = new mongoose.Schema({
    ordername:{
        type: String,
        require: true,
    },
    quantity:{
        type: Number,
        require: true,
    },
    Price:{
        type: Float32Array,
        require: true,
    }
});
var Cart = mongoose.model('Cart' , CartSchema);
module.exports = Cart;