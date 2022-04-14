
const mongoose = require('mongoose');

//we can create schema by mongoose to struct the data

const bookSchema = new mongoose.Schema({
    name:String,
    author_id:Number,
    price:Number,
    rating:Number
},{timestamps:true});

module.exports = mongoose.model('Book' , bookSchema) //this is a syntax to export the model

