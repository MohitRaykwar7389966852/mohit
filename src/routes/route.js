const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();



mongoose.connect('mongodb+srv://mraykwar99:LvIVaS9x3LyxfoQV@cluster0.1d2my.mongodb.net/MongoDb4?retryWrites=true&w=majority',{useNewurlParser:true})
.then( () => console.log("mongoDb is connected"))
.catch(err => console.log(err));

router.get('/test1' , function(res,req)
{
    req.send("done")
});

router.get('/test2' , function(res,req)
{
    req.send("done")
});


module.exports = router;
