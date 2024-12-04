const user = require('../../../Modal/user.models')
const chat = require('../../../Modal/chat.models')

const removefromchat = async (req, resp) => {
    console.log("hii by remove form chat");
    try {
        const { chatId, userName } = req.body;

        if (!chatId || !userName) {
            resp.status(400).json({ message: "provide chatId or userName" });
        } else {
            const isExisting = await user.exists({ userName }) && await chat.exists({ participants: userName });

            if (isExisting) {
                resp.status(201).json({ message: "removed user" });

                await chat.findOneAndUpdate({
                    chatId
                },{
                    $pull: {
                        participants: userName
                    }
                },{new: true})
                
            } else {
                resp.status(400).json({ message: "not a valid user" });
            }
        }
    } catch (e) {
        console.log("error", e);
    }
}

module.exports = removefromchat;