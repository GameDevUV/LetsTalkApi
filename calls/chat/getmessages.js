const message = require('../../Modal/message.models');

const getmessage = async (req, resp) => {
    console.log("hii by get message");
    try {
        const chatId = req.query.chatid;

        if (!chatId) {
            resp.status(201).json({ message: 'give chatid' });
        } else {
            if (await message.exists({ chatId })) {
                let messages = await message.find({ chatId });
                console.log("messages : ", messages)
                resp.status(201).json({ messages, tick: 'got it' })
            } else {
                resp.status(201).json({ message: 'empty message' })
            }
        }
    } catch (e) {
        console.log('error', e);
    }
}

module.exports = getmessage;