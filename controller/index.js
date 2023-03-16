
const path=require('path')
const rootdir=require('../utils/path')

const User = require('../models/user');

exports.getapp = (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','index.html'))
}
// 

exports.postuser =async (req, res, next) => {

    try{
        if(!req.body.email){
        throw new Error('please enter email');
    }

   
console.log('----------------')
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
//   const email = req.body.email;
const data=await User.create({
    name:name,
    email:email,
    phonenumber:phonenumber
})


res.status(201).json({newUserDetail: data});
    
}catch(err){
    console.log(err)
}
}
exports.getuser=async(req,res,next)=>{
    try{
        const user= await User.findAll();
        console.log(user)
        res.status(200).json({allUser:user});
    } catch (err){
        console.log('error in getdata');
    res.status(500).json({
        error:err
    });

    }
}
exports.delete=async (req,res,next)=>{    
    console.log(req.params.id)                         // create controller for delete data from database
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({err:"Id is missing"});
        }
    
        const uId=req.params.id;
        await User.destroy({where: {id:uId} });                    // destroy method for deleting data
        res.sendStatus(200);
    } catch (err){
        console.log('error in deletedata');
        res.status(500).json(err);                 // sending object from backend(json)
    }

}



// not working edit functionality

exports.edituser=async (req,res,next)=>{                             // create controller for edit data from database
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({err:"Id is missing"});
        }
        const uId=req.params.id;
        await User.update({where: {id:uId} });                    // destroy method for deleting data
        res.sendStatus(200);
    } catch (err){
        console.log('error in editdata');
        res.status(500).json(err);                 // sending object from backend(json)
    }

}


