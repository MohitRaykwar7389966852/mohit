const express = require('express');
const logger = require('./logger')
const mongoose = require('mongoose');
const userModel = require('../model/userModel');
const router = express.Router();


mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/myDataBase?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

router.get('/addUser', async function(req,res)
{
    let data = req.body;
    let dataAdded = await userModel.create(data)
    res.send(dataAdded)
});

module.exports = router;

// LvIVaS9x3LyxfoQV
// mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/mraykwar99

