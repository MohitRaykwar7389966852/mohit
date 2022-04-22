const jwt = require("jsonwebtoken");

let auth = function(req,res,next)
{
    let token = req.headers['x-auth-token']
    if(!token) res.send("header is not available")

    let checkToken = jwt.verify(token , 'x-auth-token')
    if(!checkToken) res.send("json web token is not valid")

    next()
}

module.exports.auth=auth