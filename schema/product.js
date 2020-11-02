var mongoose = require("mongoose");
var ProductSchema = new mongoose.schema({
    productname:{
        type: String,
        required: true,
    },
    productid:{
        type: Number,
        required: true,
        unique: true,
    },
    productprice:{
        type: Float32Array,
        required: true,
    }
});
var Product = mongoose.model('Product' , ProductSchema);
module.exports = Product;