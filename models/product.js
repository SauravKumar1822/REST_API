const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true,'Please enter the price']
    },
    company: {
        type: String,
        enum: ['apple','samsung','xiaomi','realme','oppo','vivo','oneplus','asus','nokia','sony','lg','htc','motorola','lenovo','google','huawei','honor','other'],
        message: `{VALUE} is not supported`
    },
    variant: {
        type: String
    },
    SKU: {
        type: String,
        required: true
    },
    additional_cost: {
        type: Number
    },
    countInStock: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);