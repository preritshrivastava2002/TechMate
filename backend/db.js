const dotenv = require("dotenv");
dotenv.config({
    path: "../.env",
  });
const mongoose = require('mongoose');

const connectToMongo = () =>{
    mongoose.connect(process.env.MONGO_URI , ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
