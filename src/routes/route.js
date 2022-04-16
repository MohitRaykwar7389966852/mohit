const express = require('express');
const mongoose = require('mongoose');
const controller = require('../controller/controller');
const router = express.Router();
const moment = require("moment")


mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/MongoDb3?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

    router.post('/createAuthor', controller.createAuthor );

    router.post('/createPublisher', controller.createPublisher );

    router.post('/createBook', controller.createBook );

    router.get('/fetchBook', controller.fetchBook );

    router.put('/books' , controller.books);

module.exports = router;
