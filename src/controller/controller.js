const userModel = require('../model/userModel');
const productModel = require('../model/productModel');
const orderModel = require('../model/orderModel');

const createProduct =  async function(req , res)
{
    let data = req.body
    let product = await productModel.create(data)
    res.send(product)
}

const createUser =  async function(req , res)
{
    req.body.isFreeAppUser = req.headers['isfreeappuser']
    let data = req.body
    let user = await userModel.create(data)
    res.send(user)
}

const order =  async function(req , res)
{
    let data = req.body
    let checkuser = await userModel.findOne({_id : req.body.userId})
    let checkproduct = await productModel.findOne({_id : req.body.productId})
    if(checkuser == null)
    {
        res.send("incorrect user id")
    }
    else if(checkproduct==null)
    {
        res.send("incorrect product id")
    }

    req.body.isFreeAppUser = req.headers["isfreeappuser"]
    if(req.body.isFreeAppUser == "true")
    {
        req.body.amount = 0
    }
    else
    {
        let productPrice = await productModel.findOne({ _id:req.body.productId }).select({_id:0 , price:1})
        let userBalance = await userModel.findOne({ _id:req.body.userId }).select({_id:0 , balance:1})
        if(productPrice.price < userBalance.balance )
        {
            req.body.amount = (userBalance.balance - productPrice.price)
        }
        else
        {
            res.send("the user doesn't have enough balance")
        }
        
    }

    let order = await orderModel.create(data)
    res.send(order)
    
}

module.exports.createProduct = createProduct;
module.exports.createUser = createUser;
module.exports.order = order;