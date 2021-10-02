const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });

const Item = mongoose.model('items', itemSchema)
module.exports = Item;