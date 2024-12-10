let chat = require('../../../Modal/chat.models');

const getGroups = (req , resp) =>{
    console.log("hii by get users")
    try {
        let userName = req.query;
        let groups = chat.find({ isGroupChat : true})
        
        resp.status(201).json({groups})
    } catch (e) {
        console.log("error in get users: ", e)

    }
} 

module.exports = getGroups;