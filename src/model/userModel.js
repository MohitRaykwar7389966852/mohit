
const mongoose = require('mongoose');

//we can create schema by mongoose to struct the data

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    number:{
        type:String,
        unique:true,
    },
    age:Number,
    gender:{
        type:String,
        enum:["male","female"]
    },
    isIndian:Boolean,
    hobby:[String],
},{timestamps:true});

module.exports = mongoose.model('User' , userSchema) //this is a syntax to export the model

