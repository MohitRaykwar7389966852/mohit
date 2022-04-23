const jwt = require("jsonwebtoken");

let auth = async function(req,res,next)
{
    try{
    let token = req.headers['x-auth-token']
    if(!token) res.send({status:500 ,msg:"header is not available"})

    let checkToken = await jwt.verify(token , 'x-auth-token')
    if(!checkToken) res.send({status:500 , msg:"json web token is not valid"})

    let userid = req.params.userId
    if(userid != checkToken.userId)
    res.send({status:403 , msg:"the user is not authrized"})
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }

    next()
}

module.exports.auth=auth