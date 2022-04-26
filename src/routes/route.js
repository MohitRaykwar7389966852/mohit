const express = require('express');
const router = express.Router();
const controller= require("../controllers/controller")


// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

// router.get('/vaccination/states',controller.vac)
// router.get('/vaccination/district/:stateId',controller.vacdis)
router.get('/vaccination/findByDistrictId',controller.vacfilter)
router.get('/weather',controller.weather)
router.get('/sortweather',controller.sortweather)
router.get('/getAllMeme',controller.allmeme)
router.post('/getMemeById', controller.meme)


module.exports = router;