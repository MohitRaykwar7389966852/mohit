const express = require('express');
const mongoose = require('mongoose');
const bookModel = require('../model/bookModel');
const authorModel = require('../model/authorModel');
const router = express.Router();
const moment = require("moment")


mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/bookDB?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

    router.post('/createAuthor', async function (req, res){
        let data = req.body
        let aid = req.body.author_id
        if(aid)
        {
            let author = await authorModel.create(data)
            res.send(author)
        }
        else
        {
            res.send("please give the author id")
        }
        
    });

    router.post('/addBook', async function (req, res){
        let data = req.body
        let aid = req.body.author_id
        if(aid)
        {
            let book = await bookModel.create(data)
            res.send(book)
        }
        else
        {
            res.send("please give the author id")
        }
        
    });

    router.get('/findChetanBook', async function (req, res){
        let authorid = await authorModel.findOne({ author_name:'Chetan Bhagat' }).select({ author_id : 1 , _id:0 })
        let book = await bookModel.find(authorid)
        res.send(book)
    });

    router.get('/findAuthorAndUpdatePrice', async function (req, res){
        let priceUpdate = await bookModel.findOneAndUpdate(
            {name:"Two states"},
            {$set:{ price : 100 }},
            {new:true}
        ).select({ _id:0 , price:1 });

        let authorid = await bookModel.findOne({ name:"Two states" }).select({author_id : 1 , _id:0 })
        let author = await authorModel.findOne(authorid).select({ author_name:1 , _id:0 })
        
        let result = { priceUpdate , author }

        res.send(result)

    });

    router.get('/findBook', async function (req, res){
        let book = await bookModel.find( { price:{$gt:50} , price:{$lt:100} }).select({author_id:1 , _id:0 })
        let aid = book.map(x=> x.author_id)
        let author = await authorModel.find({ author_id : {$in:aid} }).select({ author_name:1 , _id:0 })
        res.send(author)
    });




module.exports = router;
