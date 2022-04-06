const express = require('express');
const logger = require('../logger/logger')
const helper = require('../util/helper')
const formatter = require('../validator/formatter')
const _ = require('lodash');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send("this is my first ever api..")
    console.log(logger.welcome())
    console.log("today's date - " + helper.date())
    console.log("current month - "+helper.month())
    console.log(helper.batchinfo())
    console.log(formatter.trim())
    console.log(formatter.lower())
    console.log(formatter.upper())
});

router.get('/hello', function (req, res) {
    let array1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    console.log(_.chunk(array1, 4))

    let array2 = [1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(array2))

    let arr1 = [2,4,6,7]
    let arr2 = [6,4,8,7]
    let arr3 = [2,8,9,3]
    let arr4 = [5,4,6,7]
    let arr5 = [3,4,9,1]
    console.log(_.union(arr1,arr2,arr3,arr4,arr5))

    let array3 =[ ['horror',"The Shining"] , ['drama',"Titanic"],['thriller',"Shutter Island"],['fantasy',"Pans Labyrinth"]]
    console.log(_.fromPairs(array3))
});

module.exports = router;
// adding this comment for no reason