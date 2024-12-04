const user = require('../../Modal/user.models');
const { use } = require('../../routes/Routes');

const updtUser = async (req , resp)=>{
    console.log("hii by update user")
    try{
        const { UserName, DispName, Dp, MobileNumber, PassKey } = req.body;
        const userName = req.query.username;

        user.updateOne({
            UserName : userName //based on username
        }, {
            $set: {UserName, DispName ,Dp , MobileNumber, PassKey}
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = updtUser;