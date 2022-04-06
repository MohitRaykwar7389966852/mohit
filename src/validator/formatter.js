let str = " functionUp "
let trim = function()
{
    return str.trim()
}
let changetoLowerCase = function()
{
    return str.toLowerCase()
}
let changetoUpperCase = function()
{
    return str.toUpperCase()
}

module.exports.trim=trim
module.exports.lower=changetoLowerCase
module.exports.upper=changetoUpperCase