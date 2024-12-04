const mongoose = require('mongoose');



const messageScheme = new mongoose.Schema({
    messageId:{
        type: String,
        require: true
    },
    chatId:{
      type: String,
      ref: 'chat',
      require: true  
    },
    senderId:{
        type: String,
        ref: 'user',
        require: true
    },
    content:{
        type: String,
        require: true
    },
    
}, { timestamps: true  });

const message = mongoose.model('message', messageScheme);
module.exports = message;