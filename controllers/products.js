const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const All_Products = await Product.find({});
    res.status(200).json({ All_Products });
};

const getAllProductsTesting = async (req, res) => {
    const All_Products = await Product.find({});
    res.status(200).json({ All_Products });
};

module.exports = { getAllProducts, getAllProductsTesting };