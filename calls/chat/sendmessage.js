const message = require('../../Modal/message.models');
const chat = require('../../Modal/chat.models');
const user = require('../../Modal/user.models');
const io = require('socket.io-client')

const sendmessage = async (req, resp) => {
    console.log('hii by send message');
    
    let socket = io.connect('http://localhost:4000', {reconnect: true});
    console.log("hii by selected user");

    try {
        const { senderId, content, toUserName } = req.body;

        let messageId =   Math.random();

        let chatId = senderId + "1234" + toUserName;
        let isChatId = await chat.exists({ chatId })
        if (!isChatId) {
            let chatId2 = toUserName + "1234" + senderId;

            let isValidUser = await user.exists({ userName: senderId });
            if (!isValidUser) {
                console.log("you are not a valid user")
                resp.status(400).json({ message: 'user not found' });
            } else {
                let msg = new message({
                    messageId,
                    chatId: chatId2,
                    senderId,
                    content
                })
                let savedMessage = await msg.save();
                resp.status(201).json({ message: 'sent successfully' });
            }

        } else {
            let isValidUser = await user.exists({ userName: senderId });
            if (!isValidUser) {
                console.log("you are not a valid user")
                resp.status(400).json({ message: 'user not found' });
            } else {
                let msg = new message({
                    messageId,
                    chatId: chatId,
                    senderId,
                    content
                })
                let savedMessage = await msg.save();
                // socket.to(chatId).emit('newMessage', savedMessage)
                resp.status(201).json({ message: 'sent successfully' });
            }

        }


    } catch (e) {
        console.log('error', e);
    }
}

module.exports = sendmessage;