
const mongoose = require('mongoose');

//we can create schema by mongoose to struct the data

const bookSchema = new mongoose.Schema({
    bookName:String,
    authorName:String,
    category:String,
    year:Number,
    isPublish:Boolean,
    sales:{
        type:Number,
        default:0
    }
},{timestamps:true});

module.exports = mongoose.model('Book' , bookSchema) //this is a syntax to export the model

