const userModel = require('../model/userModel');
const productModel = require('../model/productModel');
const orderModel = require('../model/orderModel');

const jwt = require('jsonwebtoken');

const addUser =  async function(req , res)
{
    let data = req.body
    let user = await userModel.create(data)
    res.send(user)
}

const login =  async function(req , res)
{
    let token = await jwt.sign({userId : req.body.email} , "x-auth-example")

    let user = await userModel.findOne({ email: req.body.email , password:req.body.password })
    if(!user) res.send("user is not exist")
    res.send({status:true, data:token})
}

const fetch =  async function(req , res)
{   
    let token = req.headers['x-auth-example']
    if(!token) res.send("header not available")
    else console.log("header present")

    var decoded = jwt.verify(token, 'x-auth-example');
    if(!decoded) res.send("token is not verified")
    else console.log("token is verified")

    let data = req.query
    let user = await userModel.findOne({ _id:data.userid })
    res.send(user)
}

module.exports.addUser = addUser;
module.exports.login = login;
module.exports.fetch = fetch;
