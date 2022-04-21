const express = require('express');
const router = express.Router();


 
const userController= require("../controllers/userController")
const productController=require("../controllers/productController")
const ordercontroller=require('../controllers/orderController')



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





router.post('/create-a-user', userController.createUser)
router.post('/createProduct',productController.createProduct)
router.post('/createOrder',ordercontroller.createOrder)







module.exports = router;