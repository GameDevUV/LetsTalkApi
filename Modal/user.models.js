const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
    userId: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    userName: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    displayName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    profilePicture:{
        type: String,
        default : {
            url: 'google.com'
        }
    },
    status : {
        type : String,
        enum : ["ONLINE" , "OFFLINE"],
        default : "OFFLINE"
    },
    contacts:[
        {
            type: String, 
            ref: 'user'
        }
    ],
    password : {
        type: String,
    },
    passKey:{
        type: String,
    },
    aboutme:{
        type: String
    }
})

const user = mongoose.model('user', newSchema);
module.exports = user