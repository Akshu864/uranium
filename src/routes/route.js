const express = require('express');
const router = express.Router();






router.get("/test-me",function (req, res) {
    res.send("my first api")

})

router.get("/test-me2",function (req, res) {
    res.send("my 2nd api")

})









    
module.exports = router;