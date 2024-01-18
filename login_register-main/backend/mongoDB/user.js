const mongoose = require('mongoose');
const usershema =   new mongoose.Schema({
    Select_your_organization_type:{
        type:String,
        required:true,
    },
    Name_of_your_organization:{
        type:String,
        required:true,
    },
    PAN_Card:{
        type:String,
        required:true,
        unique:true,
    },
    Email_ID:{
        type:String,
        required:true,
        unique:true,
    },
    Phone_number:{
        type:Number,
        required:true,

    },
    Password:{
        type:String,
        required:true,
    },
    Confirm_Password:{
        type:String,
        required:true,
    },

});

const User = mongoose.model('User',usershema);
module.exports = User