const user = require('../../Modal/user.models')

const searchUser = async (req, resp) => {
    console.log(' hii by search again');

    try {

        let userName = req.query.username || " ";
        let searchedUser = await user.find({
            $or: [
                { userName: { $regex: userName, $options: 'i' } },
                { userId: { $regex: userName, $options: 'i' } },
                { email: { $regex: userName, $options: 'i' } }
            ]
        }).limit(5);

        if(searchedUser !== null){
            resp.status(201).json({ data: searchedUser, find: true });    
        }else{
            resp.status(201).json({ data: [], find: false, message: "user not found" });
        }

    } catch (error) {
        resp.json({ message: error, find: false });
    }

}

module.exports = searchUser;