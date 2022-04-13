const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}

const getbookInfo= async function(req,res){

    let allInfo=await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0} )
    res.send({msg:allInfo})
}

const getbookYear= async function(req,res){

    let allYear=await bookModel.find({year:2021})
    res.send({msg:allYear})
}

// const getPartbooks=async function(req,res){



//     res.send({msg : partBooks})
// }


const getInrbooks= async function(req,res){

    let inrBooks=await bookModel.find({"price.indianPrice" : {$in:[100,200,500]}} )

    res.send({msg: inrBooks})
}

const getRandomBooks=async function(req,res){

    let randomBooks=await bookModel.find({   $or :[ {totalPages:{ $gt: 500   }}]})
    res.send({msg:  randomBooks})

}



const getParticularBooks = async function(req, res){
    let name = req.query.authorName
    let year = req.query.year
    let bookData = await bookModel.find({$or : [{authorName : name},{year : year}]})
    res.send({msg : bookData})
}








module.exports.createBook= createBook
module.exports.getBookData= getBookData
module.exports.getbookInfo=getbookInfo
module.exports.getbookYear=getbookYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getInrbooks=getInrbooks
module.exports.getRandomBooks=getRandomBooks