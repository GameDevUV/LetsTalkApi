const chat = require('../../Modal/chat.models')

const newchat = async (req , resp)=>{
    console.log("hii by chat");
    try {
        const {chatId,participants, isGroupChat , groupName} = req.body;

        const haveAnChatId = await chat.exists({chatId})
        const chatID2 = participants[0] + "1234" + participants[1];
        const hChatId = await chat.exists({chatId : chatID2})
        if(haveAnChatId || hChatId){
            console.log('alrady chat id')
            return;
        }else{
            let addChat = new chat({
                chatId,
                participants, 
                isGroupChat,
                groupName
            })
    
            await addChat.save();    
        }
        resp.status(201).json({message: 'new chat create'});
    } catch (e) {
        console.log('error', e);
    }
}

module.exports =  newchat;