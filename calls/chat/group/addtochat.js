const chat = require('../../../Modal/chat.models');
const user = require('../../../Modal/user.models')

const addtochat = async (req, resp) => {
    console.log("hii by add user");
    try {

        const { chatId, userName } = req.body;

        if (!chatId || !userName) {
            resp.status(400).json({ message: "provide chatId or userName" });
        } else {
            const userExists = await user.exists({ userName })

            if (userExists) {
                resp.status(201).json({ message: "user added" });

                await chat.findOneAndUpdate({
                    chatId
                },{
                    $addToSet : {
                        participants: userName
                    }
                }, {new: true})

            } else {
                resp.status(400).json({ message: "invalid user" });
            }
        }

    } catch (e) {
        console.log('error', e);
    }
}

module.exports = addtochat;