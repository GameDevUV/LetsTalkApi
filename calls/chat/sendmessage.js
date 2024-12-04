const message = require('../../Modal/message.models');
const chat = require('../../Modal/chat.models');
const user = require('../../Modal/user.models');

const sendmessage = async (req, resp) => {
    console.log('hii by send message');

    try {
        const { messageId, chatId, senderId, content } = req.body;
        let isValidChatId = await chat.exists({ chatId });
        let isValidUser = await user.exists({ userId: senderId });

        if (!isValidChatId) {
            console.log('not a valid chat  id');
            resp.status(400).json({ message: 'chatid not found' });
        } else if (!isValidUser) {
            console.log("you are not a valid user")
            resp.status(400).json({ message: 'user not found' });
        } else {
            let msg = new message({
                messageId,
                chatId,
                senderId,
                content
            })
            await msg.save();
            resp.status(201).json({ message: 'sent successfully' });
        }

    } catch (e) {
        console.log('error', e);
    }
}

module.exports = sendmessage;