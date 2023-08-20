const mongoose = require('mongoose');
require('dotenv').config();
 const Connection = ()=>{

    const user = process.env.USER;
    const password = process.env.PASSWORD
    const MONGODB_URL = `mongodb+srv://Parth:db1234@cluster0.xns2z0n.mongodb.net/tododb?retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL,{useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
    console.log("database connected");
    })

    
    mongoose.connection.on('disconnected',()=>{
        console.log("database disconnected");
        })
  mongoose.connection.on('error',()=>{
            console.log(error.message);
            })
}
module.exports = Connection;