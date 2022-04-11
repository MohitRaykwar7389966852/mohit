
const mongoose = require('mongoose');

//we can create schema by mongoose to struct the data

const bookSchema = new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:Number
},{timestamps:true});

module.exports = mongoose.model('User' , bookSchema) //this is a syntax to export the model

