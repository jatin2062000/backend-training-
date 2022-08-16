const UserModel= require("../models/bookmodel")

const createBooks= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBooks= async function (req, res) {
    let allUsers= await UserModel.find({})
    res.send({msg: allUsers})
}

module.exports.createBooks= createBooks
module.exports.getBooks= getBooks
