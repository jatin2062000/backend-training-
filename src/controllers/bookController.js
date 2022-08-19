// const { count } = require("console")
// const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks


// const count  = require("console")
const BookModel = require("../models/bookModel")
const AuthorModel = require("../models/authormodel")



let createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

let createBook= async function (req, res) {
    let data = req.body
    let saveData = await BookModel.create(data)
       res.send({ msg: saveData });
}

   let getBooksbyChetanBhagat = async function(req , res){
       let data=await AuthorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
       let bookData =await BookModel.find({author_id:data[0].author_id})
       res.send({msg :bookData})
   }
    let authorOfBOok = async function(req , res){
        let data=await BookModel.findOneAndUpdate({name :"Two states"},{$set :{prices:100}},{new:true})
        let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
        let price=data.price
        res.send({msg : authorData,price})
    }
    
    const authorsName = async function (req,res) {
        const booksId= await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id: 1, _id:0})
        const id = booksId.map(inp => inp.author_id)
     let temp =[]
        for(let i=0; i<id.length; i++) {
            let x = id[i]
            const author = await authorModel.find({author_id:x}).select({author_name: 1, _id:0})
            temp.push(author)
        }
       const authorName = temp.flat()
      res.send({msg:authorName})
    }

 module.exports.authorsName=authorsName;
module.exports.createAuthor= createAuthor;
module.exports.createBook= createBook;
module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat;
module.exports.authorOfBOok= authorOfBOok;
// module.exports.bookBetween50_100 =bookBetween50_100