const express = require('express');
const router = express.Router();


const batchController=require("../controllers/batchController")
const developerController=require("../controllers/developerController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/batches",batchController.createBatch)
router.post("/developer",developerController.createDeveloper)
router.get("/scholarship-Developers",developerController.scholarShipDev)
router.get("/getData",developerController.developers)

module.exports = router;