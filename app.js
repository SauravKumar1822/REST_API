const express = require('express');
const app = express();
const connectDB = require('./Database/connect');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const products_routes = require('./routes/products');

app.get('/', (req, res) => {
  res.send("Hi , Welcome to my Mirrar Backend assignment!");
});

// middleware to set routes
app.use("/api/products", products_routes);

const start = async () => {
    try {
      await connectDB(process.env.MONGODB_URL);
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {    
      console.log(error);
    }
};

start();