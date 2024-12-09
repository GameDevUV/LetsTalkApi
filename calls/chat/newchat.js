const chat = require('../../Modal/chat.models')

const newchat = async (req, resp) => {
    console.log("hii by chat");
    try {
        const { participants, isGroupChat, groupName } = req.body;

        const chatId = participants[0] + "1234" + participants[1];
        const haveAnChatId = await chat.exists({ chatId })
        const chatID2 = participants[1] + "1234" + participants[0];
        const hChatId = await chat.exists({ chatId: chatID2 })
        if (haveAnChatId || hChatId) {
            console.log('alrady chat id')
            if (haveAnChatId) {
                resp.status(201).json({ message: 'alredy chat id', chatId, participants });
                console.log('alrady chat id', chatId)
            } else if (hChatId) {
                resp.status(201).json({ message: 'alredy chat id', chatId: chatID2, participants });
                console.log('alrady chat id', chatId)
            }
        } else {
            let addChat = new chat({
                chatId,
                participants,
                isGroupChat,
                groupName
            })
            await addChat.save();
            resp.status(201).json({ message: 'new chat create', chatId, participants });
        }
        console.log("chat ID:",chatId)
    } catch (e) {
        console.log('error', e);
    }
}

module.exports = newchat;