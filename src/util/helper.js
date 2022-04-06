let date = new Date();
let printDate = function()
{
    return date.getDate()
}
let printMonth = function()
{
    return date.getMonth()+1
}
let printBatchInfo = function()
{
    return "Uranium, W2D3, the topic for today is Nodejs module system"
}

module.exports.date = printDate
module.exports.month = printMonth
module.exports.batchinfo = printBatchInfo
