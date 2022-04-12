const express = require('express');
const logger = require('./logger')
const mongoose = require('mongoose');
const bookModel = require('../model/bookModel');
const router = express.Router();


mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/bookDB?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

router.post('/addBook', async function(req,res)
{
    let data = req.body;
    let dataAdded = await bookModel.create(data)
    res.send(dataAdded)
});

router.get('/showBook', async function(req,res)
{
    // let books = await bookModel.find({ authorName:"stanlee" })
    // let books = await bookModel.find({ authorName:"stanlee" , isPublish:true })
    // let books = await bookModel.find({  $or:[{authorName:"stanlee"} , {isPublish:false}] })
    // let books = await bookModel.find({ authorName:"stanlee" }).count()
    // let books = await bookModel.find({ isPublish:true }).select({ authorName:1 , year:1 , _id:0})
    // let books = await bookModel.find().limit(3)
    // let books = await bookModel.find().skip(2).limit(4)
    // let books = await bookModel.find().sort({ year:-1 })
    // let books = await bookModel.find({ sales:{$eq:100} })
    // let books = await bookModel.find({ sales:{$ne:0} })
    // let books = await bookModel.find({ sales:{$gt:100} })
    // let books = await bookModel.find({ sales:{$ls:100} })
    // let books = await bookModel.find({ year:{$in:[1998,1989,2000]} })
    // let books = await bookModel.find({ year:{$nin:[1999,1989]} })
    // let books = await bookModel.findById("625593a853390925333a76b6")
    // let books = await bookModel.findOne({ isPublish:false })
    // let books = await bookModel.updateOne({
    //     sales:100,
    //     $set:{ isPublisg:false }
    // })
    // let books = await bookModel.find({ authorName:/^s/ })
    // let books = await bookModel.find({ authorName:/^s/i })
    // let books = await bookModel.find({ authorName:/n$/ })
    // let books = await bookModel.find({ authorName:/.*le*./ })
    
    res.send(books)
});

module.exports = router;
