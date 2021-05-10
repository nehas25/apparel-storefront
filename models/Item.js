const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    price: {
        type: String,
        required: true
    }
}, 
{ 
    timestamps: true 
});

const ItemModel = mongoose.model('Item', ItemSchema);

module.exports = ItemModel;
