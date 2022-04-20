const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const moment=require('moment');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( 
    function(req , res , next)
    {
        let date = moment().format('YYYY-MM-DD HH:mm:ss')
        let ipaddress = req.ip;
        let path = req.path;
        console.log( date ,",", ipaddress ,",", path);
        next()
    })

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



