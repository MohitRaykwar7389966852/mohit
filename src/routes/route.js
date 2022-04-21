const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const mw = require('../middleware/middleware');
const controller = require('../controller/controller');

mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/PracticeDb?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

router.post('/addUser', controller.addUser );
router.post('/login', controller.login );
router.get('/fetch', controller.fetch );


module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJtb2hpdEBnbWFpbC5jb20iLCJpYXQiOjE2NTA1MzQwNjV9.dLD800-oYRPqXrgoZb6ZV-lCqoMYfFoaxdUdTfqG-9o