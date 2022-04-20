const express = require('express');
const moment=require('moment');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req,res,next){
    let date = moment().format('YYYY-MM-DD HH:MM:SS')
    console.log(`${date}, ${req.socket.remoteAddress}, ${req.path}`)
    next()
})


app.use('/', route);



// app.use(function(req, res, next){

//     let timestamp=newDate().getTime()
//     console.log(timestamp)
//     next()
//   });




// function middleware1(req,res,next){

//     let timestamp=moment().format('YYYY-MM-DD HH:mm:ss');
//     console.log(`${timestamp},${ req.socket.remoteAddress},${req.route.path}`)
//     next();

    
// }



  
app.get





app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
