const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    chatId:{
        type: String,
        require: true,
        lowercase: true,
        unique: true
    },
    participants:[{
        type : String,
        require : true
    }],
    isGroupChat:{
        type: Boolean,
        default: false
    },
    groupName:{
        type: String,
        require: function(){return this.isGroupChat;}
    },
    // admins:[{
    //     type: String,
    //     require: function(){return this.isGroupChat;}
    // }],

}, {timestamps : true})

const chat = mongoose.model('chat' , chatSchema);
module.exports = chat