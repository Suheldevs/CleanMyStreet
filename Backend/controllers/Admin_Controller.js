const adminModel = require('../models/Admin_model');
const { errorHandler } = require('../utils/error');

const signin = async(req,res)=>{
    try{
        const {username,password,email} = req.body;
        if(!username || !password || !email){
            return res.status(404).json({message:'All fiend is required'})
        }
        const newUser = new adminModel({username,email,password})
        await newUser.save()
        res.status(200).json({message:'Sign in successfully',userData:newUser})

    }
    catch(err){
        res.status(500).json({message:'Internal server error'})
    }
}
const login = async(req,res)=>{
    try{
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(404).json({message:'All fiend is required'})
        }
        const user = await adminModel.findOne({username})
        if(!user){
           return res.status(400).json({message:'user not found'})
        }
        if(user.password == password){
          return  res.status(200).json({message:'Log in successfully',userData:user})
        }
        res.status(404).json({message:'Something went wrong'})
    }
    catch(err){
        res.status(500).json({message:'Internal server error'})
    }
}

module.exports = {signin,login}