let chat = require('../../../Modal/chat.models');

const getGroups = async (req, resp) => {
    console.log("hii by get group chats")
    try {
        let userName = req.query.userName;
        let groups = await chat.find({
            isGroupChat: true,
            participants: userName
        });

        if(groups.length === 0){
            resp.status(201).json({message : "you are not added to any group"})
        }else{
            resp.status(201).json({ groups , message : "you are in" , statusCode : 'ok'});
        }
    } catch (e) {
        console.log("error in get users: ", e)

    }
}

module.exports = getGroups;