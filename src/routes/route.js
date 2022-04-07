const express = require('express');
const logger=require("../logger/logger")

const info=require('../util/helper')
const format=require('../validator/formatter')
const lodash=require('lodash')




const router = express.Router();

const months=['january','february','march','april','may','june','july','august','september','november','december']




const odd=[1,3,5,7,9,11,13,15,17,19];
console.log(lodash.tail(odd));


let a=[1,2,3,4];
let b=[5,6,5,8];
let c=[9,4,11,12];
let d=[13,14,2,16];
let e=[17,18,19,20];
console.log(lodash.union(a,b,c,d,e));

let moviesArr = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
console.log(lodash.fromPairs(moviesArr));



router.get('/test-me', function (req, res) {
    res.send('My first ever api ')
   console.log( lodash.chunk(months,4))


});

router.get('/test-me2', function (req, res) {
    res.send("logger")

    info.printDate();
    info.printMonth();
    info.getBatchInfo();
    format.trimming();
    logger.logging()
    console.log('cool')
    
});


module.exports = router;
// adding this comment for no reason