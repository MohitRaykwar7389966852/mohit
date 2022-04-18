const express = require('express');
const mongoose = require('mongoose');
const controller = require('../controller/controller');
const router = express.Router();
const moment = require("moment")


mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/MongoDb4?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

    router.post('/batches', controller.createBatch );

    router.post('/developers', controller.createDeveloper );

    router.get('/scholarship-developers', controller.fetchScholar );

    router.get('/developers', controller.fetchDeveloper );


module.exports = router;
