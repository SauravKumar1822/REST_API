const connectDB = require('./Database/connect');
const Product = require('./models/product');
require('dotenv').config();
const ProductJson = require('./products.json');

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      await Product.create(ProductJson);
      console.log('Data imported');
    } catch (error) {    
      console.log(error);
    }
};

start();