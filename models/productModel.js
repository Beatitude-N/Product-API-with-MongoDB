const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "Please enter the product name"],
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the product quantity"],
        default: 0,
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
    },
    image: {
        type: Number,
    },

},
{
    timestamps: true,
})

const Product = mongoose.model("product", productSchema);   
module.exports = Product