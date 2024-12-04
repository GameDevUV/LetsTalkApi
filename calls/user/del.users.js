const user = require('../../Modal/user.models');

const del = async (req , resp)=>{
    console.log('hii by delete user');

    try {
        const {UserName} = req.body;
        await user.deleteOne({UserName : UserName});
        resp.status(201).json({message: "deleted successfully"});
    } catch (e) {
        console.log(e);
    }
}

module.exports = del