const bookModel = require('../model/bookModel');
const authorModel = require('../model/authorModel');
const publisherModel = require('../model/publisherModel');

const createAuthor =  async function(req , res)
{
    let data = req.body
    let author = await authorModel.create(data)
    res.send(author)
}

const createPublisher = async function(req , res)
{
    let data = req.body
    let publisher = await publisherModel.create(data)
    res.send(publisher)
}

const createBook = async function(req , res)
{
    let data = req.body
    if(data.author)
    {
        let authorId = await authorModel.findOne({ _id:data.author })
        if(!authorId)
        {
            res.send("the author is not present in record")
        }
    }
    else
    {
        res.send("the author detail is required")
    }

    if(data.publisher)
    {
        let publisherId = await publisherModel.findOne({ _id:data.publisher })
        if(!publisherId)
        {
            res.send("the publisher is not present in record")
        }
    }
    else
    {
        res.send("the publisher detail is required")
    }

    let book = await bookModel.create(data)
    res.send(book)
}

const fetchBook = async function(req , res)
{
    let book = await bookModel.find().populate('author').populate('publisher')
    res.send(book)
}

const books = async function(req , res)
{
    let publisher = await publisherModel.find({ name:{$in:["penguin" ,"HarperCollins"]} }).select({_id:1})
    let updateIsHardCover
    for(let i=0; i<publisher.length; i++)
    {
        updateIsHardCover = await bookModel.updateMany(
            { publisher : publisher[i]._id },
            {$set:{isHardCover : true}}
        )
    }

    let author = await authorModel.find({ rating:{$gt: 3.5} })
    let updatePrice
    for(let i=0; i<author.length; i++)
    {
        updatePrice = await bookModel.updateMany(
            { author : author[i]._id },
            {$inc:{price : 10}}
        )
    }
    res.send({updateIsHardCover , updatePrice})
}

module.exports.createAuthor = createAuthor;
module.exports.createPublisher = createPublisher;
module.exports.createBook = createBook;
module.exports.fetchBook = fetchBook;
module.exports.books = books;