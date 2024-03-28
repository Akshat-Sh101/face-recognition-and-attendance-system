// const mongoose = require("mongoose")
const { default: mongoose } = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/LoginSignupData")

connect.then(()=>{
    console.log("Mongodb connected")
})
.catch(()=>{
    console.log("An error occured")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

const collection = new mongoose.model("users",LogInSchema)

module.exports = collection;