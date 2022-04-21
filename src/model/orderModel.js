const mongoose = require('mongoose');
const moment = require('moment');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
	userId: {
        type:ObjectId,
        ref:"User"
    },
	productId: {
        type:ObjectId,
        ref:"Product"
    },
	amount: Number,
	isFreeAppUser: Boolean, 
	date: {
        type:String,
        default:moment().format("DD/MM/YYYY")
    }
});

module.exports = mongoose.model('Order' , orderSchema)