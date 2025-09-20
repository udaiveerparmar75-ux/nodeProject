const mongoose = require('mongoose');

// mongo connector

const connectMongo = async () => {
    try{
        const connection = await mongoose.connect('mongodb://localhost:27017/nodeProject');
        console.log("MongoDB connected", connection.connection.host);
    }catch(error){
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
};

module.exports = connectMongo;