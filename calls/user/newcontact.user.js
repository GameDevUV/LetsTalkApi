const user = require('../../Modal/user.models');

const newcontact = async (req , resp) =>{
    console.log("hii by new contact");
    try {
        const {userName , contactName} = req.body;

        if(!userName || !contactName){
            resp.status(401).json({message : "invalid information"})
        }

        await user.findOneAndUpdate({
            userName
        }, {
            $addToSet: {
                contacts : contactName
            }
        }, {
            new : true
        })
        await user.findOneAndUpdate({
            userName : contactName
        },{
            $addToSet : {
                contacts: userName
            }
        }, {
            new : true
        })

        resp.status(201).json({message : "contact updated" , addedUser: contactName});

    } catch (e) {
        console.log("error in new contact: ", e);
        resp.status(401).json({message : `error ${e}`});
    }
}

module.exports = newcontact;