const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const { Schema } = mongoose

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
        uppercase: true
    },
    type: {
        type: String,
        required: true,
        uppercase: true
    },
    price: {
        type: Number,
        required: true,
        uppercase: true
    },
    image: {
        type: String,
        required: true,
        uppercase: true
    }
}, {
    collection:'Products',
    versionKey: false
})

const ProductModel = mongoose.model('product',ProductSchema)

module.exports = ProductModel;
