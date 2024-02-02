const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const { company,name,sort,select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = { $regex: company, $options: 'i' };
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    let apiData = Product.find(queryObject);
    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    const All_Products = await apiData;
    res.status(200).json({ All_Products });
};

const getAllProductsTesting = async (req, res) => {
    const { company,name,sort,select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = { $regex: company, $options: 'i' };
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    let apiData = Product.find(queryObject);
    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    const All_Products = await apiData;
    res.status(200).json({ All_Products });
};

module.exports = { getAllProducts, getAllProductsTesting };