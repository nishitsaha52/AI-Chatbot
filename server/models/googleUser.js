const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    image:String
},{timestamps:true});


const guserdb = new mongoose.model("gusers",userSchema);

module.exports = guserdb;