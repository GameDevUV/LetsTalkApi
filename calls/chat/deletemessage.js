const message = require('../../Modal/message.models');

const deletemessage = async (req, resp) => {
    console.log("hii by delete message");

    try {

        const { messageId } = req.body;

        if (!messageId) {
            resp.status(401).json({ message: "provide a message id" })
        } else {
            let isMessage = await message.exists({ messageId });

            if (isMessage) {
                resp.status(201).json({ message: "message deleted" })
                await message.deleteOne({messageId});
            } else {
                resp.status(401).json({ message: "not a valid id" })
            }
        }

    } catch (e) {
        console.log("error", e);
    }
}

module.exports = deletemessage;