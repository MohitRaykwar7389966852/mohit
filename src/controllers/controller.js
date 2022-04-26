const axios = require('axios');

// const vaccination = async function (req,res){
//     let option = { 
//         method :"get",
//         url :'https://cdn-api.co-vin.in/api/v2/admin/location/states'
//     }
//     let result = await axios(option)
//     res.send(result.data)
// }

// const vacdis = async function (req,res){
//     let id = req.params.stateId
//     let option = { 
//         method :"get",
//         url :`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
//     }
//     let result = await axios(option)
//     res.send(result.data)
// }

const vacfilter = async function (req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        let option = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(option)
        res.send(result.data)
    }
    catch (e) {
        res.status(500).send(e)
    }
}

const weather = async function (req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        let option = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = await axios(option)
        res.send(result.data)
    }
    catch (e) {
        res.status(500).send(e)
    }
}

const sortweather = async function (req, res) {
    try {
        let tmp = []
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let i = 0; i < city.length; i++) {
            let option = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=d7ce293a6ba95725acee48d91475b5cc`
            }
            let result = await axios(option)
            tmp.push({ city: result.data.name, temp: result.data.main.temp })
        }
        for (let i = 0; i < tmp.length; i++) {
            for (let j = i; j < tmp.length; j++) {
                if (tmp[i].temp > tmp[j].temp) {
                    let a = tmp[i]
                    tmp[i] = tmp[j]
                    tmp[j] = a
                }
            }
        }
        res.send({ data: tmp })
    }
    catch (e) {
        res.status(500).send(e)
    }
}

const allmeme = async function (req, res) {
    try {
        let option = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(option)
        res.send(result.data)
    }
    catch (e) {
        res.status(500).send(e)
    }
}

const meme = async function (req, res) {
    try {
        let id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        let option = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(option)
        res.send(result.data)
    }
    catch (e) {
        res.status(500).send(e)
    }
}

// module.exports.vac = vaccination
// module.exports.vacdis = vacdis
module.exports.vacfilter = vacfilter
module.exports.weather = weather
module.exports.sortweather = sortweather
module.exports.allmeme = allmeme
module.exports.meme = meme