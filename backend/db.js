const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://admin:prerit@cluster0.1bxhuyx.mongodb.net/Major1?retryWrites=true&w=majority";

const connectToMongo = () =>{
    mongoose.connect(process.env.mongoURI || mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
