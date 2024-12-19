const mongoose = require('mongoose');

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        default:Math.random.toString(36).substring(1,6).toUpperCase(),
        unique:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

const userModel = new mongoose.model('admin',adminSchema)
module.exports = userModel