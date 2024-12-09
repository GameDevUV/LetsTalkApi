const user = require('../../Modal/user.models')

const sendself = async (req, resp) => {
    console.log(' hii by search');

    try {
        let userName = req.query.username;

        let isExisting = await user.exists({ userName });

        if (isExisting) {
            let searchedUser = await user.find({ userName })
            console.log("searche user: ", searchedUser);
            console.log(searchedUser[0].contacts);
            resp.status(201).json({ user: searchedUser[0].contacts });
        }else{
            resp.status(401).json({ status : "not found" });
        }
    } catch (error) {
        resp.json({ message: error });
    }

}

module.exports = sendself;