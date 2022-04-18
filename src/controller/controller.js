const developerModel = require('../model/developerModel');
const batchModel = require('../model/batchModel');


const createBatch =  async function(req , res)
{
    let data = req.body
    let batch = await batchModel.create(data)
    res.send(batch)
}

const createDeveloper =  async function(req , res)
{
    let data = req.body
    let developer = await developerModel.create(data)
    res.send(developer)
}

const fetchScholar =  async function(req , res)
{
    let developer = await developerModel.find({gender:"female" , percentage:{$gte:70} }).populate("batch")
    res.send(developer)
}

const fetchDeveloper =  async function(req , res)
{
    let data = req.query
    let developer = await developerModel.find({program:data.program , percentage:data.percentage }).populate("batch")
    res.send(developer)
}


module.exports.createBatch = createBatch;
module.exports.createDeveloper = createDeveloper;
module.exports.fetchScholar = fetchScholar;
module.exports.fetchDeveloper = fetchDeveloper;