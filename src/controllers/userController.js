const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
// const { findOneAndUpdate } = require('../models/userModel');

const newUser = async function(req,res)
{
    let data=req.body;
    let newData=await UserModel.create(data);
    res.send({status : true,msg : newData});
};

const loginUser = async function(req,res)
{
    let data=req.body;
    let user=await UserModel.findOne({emailId : data.emailId,password : data.password});
    if(user!=null)
    {
        let token=await jwt.sign({_id : user._id,emailId : user.emailId},'SecretKey');
        res.send({status : true,msg : token});
    }
    else
    {
         res.send({status : false,msg : 'Email ID or Password is Incorrect!'});   
    }
};

const getUserDetails = async function(req,res)
{
    let id=req.params.userId;
    let user=await UserModel.findOne({_id : id,isDeleted : false});
    if(user==null)
    {
        res.send({status : false,msg : 'User does not exist!'});
    
    }    
    else
    {
        res.send({status : true,msg : user});
    }
};
/////////////Q=4////////////////
const postMessage = async function (req, res) {
  let message=req.body.message
  let user=await UserModel.findById(req.params.userId)
  if(!user) return res.send({msg:"no such user exists"})
  let updatedPosts=user.posts 
   updatedPosts.push(message)
  let updatedUser=await UserModel.findOneAndUpdate({_id:user._id},{posts:updatedPosts},{new:true})
   return res.send({status:true,data:updatedUser})

}
const updateUserDetails = async function(req,res)
{
    let id=req.params.userId;
    let data=req.body;
    let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},data,{new : true});
    if(!user)
    {
        res.send({status : false,msg : 'User does not exist!'});
    }
    else
    {
        res.send({status : true,msg : user});
    }
};

const deleteUser = async function(req,res)
{
    let id=req.params.userId;
    // let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},{isDeleted : true});
    // if(user==null)

    let deletes=await UserModel.updateOne({_id:id},{$set:{isDeleted:true}},{upsert:true})
  res.send({msg:"user successfully deleted",data:deletes})
  if(!user)
    {
        res.send({status : false,msg : 'User does not exist!'});
    
    }    
    else
    {
        res.send({status : true,msg : 'User has been deleted successfully!'});
    }
}

module.exports={newUser,loginUser,getUserDetails,postMessage ,updateUserDetails,deleteUser};