const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mw = require('../middleware/middleware');
const controller = require('../controller/controller');

mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/MiddlewareDb?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

router.post('/createProduct', controller.createProduct );

router.post('/createUser',mw.checkFreeUser, controller.createUser );

router.post('/order',mw.checkFreeUser,controller.order );

module.exports = router;