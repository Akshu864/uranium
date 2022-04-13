const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel")
const UserController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", UserController.createBook )

router.get("/getBookData", UserController.getBookData)

router.get("/getInfo",UserController.getbookInfo)

router.get("/getYear",UserController.getbookYear)

router.get("/getParticular",UserController.getParticularBooks)

router.get("/getInbooks",UserController.getInrbooks)
router.get("/getRandombooks",UserController.getRandomBooks)

module.exports = router;