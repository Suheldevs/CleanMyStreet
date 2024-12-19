const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        default:Math.random().toString(36).substring(2,8)
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

const adminModel = new mongoose.model('admin',adminSchema);

module.exports = adminModel