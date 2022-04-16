const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const bookSchema = new mongoose.Schema({
    name:String,
	price:Number,
    ratings:Number,
    isHardCover:{
        type:Boolean,
        default:false
    },
    author:{
        type:ObjectId,
        ref:"Author"
    },
	publisher: {
        type:ObjectId,
        ref:"Publisher"
    }
});

module.exports = mongoose.model('Book' , bookSchema) //this is a syntax to export the model

