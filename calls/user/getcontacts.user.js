const user = require('../../Modal/user.models');

const getcontacts = async (req, resp) => {
    console.log("Hii by get contacts");
    try {
        const { userName } = req.query;

        if (!userName) {
            resp.json({ message: "give username" });
        }

        const isExists = await user.exists({ userName })

        if (isExists) {
            let contacts = await user.findOne({
                userName
            })

            resp.status(201).json({ cont: contacts.contacts })
        }

    } catch (e) {
        console.log("error: ", e);
        resp.status(400).json({ message: "error" })
    }
}

module.exports = getcontacts;