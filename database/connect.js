const mongoose = require('mongoose');

const connectDB =(db_password) => {
    console.log('connect db');
    return mongoose.connect(db_password, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;