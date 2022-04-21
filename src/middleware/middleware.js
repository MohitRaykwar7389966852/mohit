
const checkFreeUser = function(req,res, next)
{
    let header = req.headers['isfreeappuser']
    if(header != undefined)
    {
        next()
    }
    else
    {
        res.send("the request is missing a mandatory header")
    }
}

module.exports.checkFreeUser = checkFreeUser
