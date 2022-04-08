const express = require('express');
const logger = require('./logger')

const router = express.Router();

let movies = ['martian','avangers','batman','bahubali','pushpa','incidious','3idiots']

//problem 1
router.get('/movies', function (req, res)
{
    res.send(movies)
});

//problem 2 & 3
// router.get('/movies', function (req, res)
// {
//     if(req.query.indexnumber > movies.length)
//     {
//         res.send("use a valid index")
//     }
//     else
//     {
//         res.send(movies[req.query.indexnumber])
//     }
// });


const films = [ 
    {
       'id': 1,
       'name': 'The Shining'
    },
    {
       'id': 2,
       'name': 'Incendies'
    },
    {
       'id': 3,
       'name': 'Rang de Basanti'
    },
    {
       'id': 4,
       'name': 'Finding Nemo'
    }
]

// //problem 4
// router.get('/films', function (req, res){
//     res.send(films)
// });

//problem 5
// router.get('/films', function (req, res){
//     let id = req.query.filmid
//     let filmobject = films.find(x=> x.id == id)
//     if(filmobject == undefined)
//     {
//         res.send("No movie exists with this id")
//     }
//     else
//     {
//         res.send(filmobject)
//     }
// });

module.exports = router;

// adding this comment for no reason