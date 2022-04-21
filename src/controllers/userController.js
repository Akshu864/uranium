const req = require("express/lib/request")
const userModel= require("../models/userModel")



const createUser= async function (req, res) {
    let data= req.body
    
    let isFreeAppUser=req.headers.isfreeappuser

    if(!isFreeAppUser){

    res.send("mandatory header not present")}
    else{

    let savedData= await userModel.create(data)
    res.send({msg: savedData})}
}


module.exports.createUser= createUser