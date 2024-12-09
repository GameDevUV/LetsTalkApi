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

            // let DetailedContacts = [];
            // console.log("before looping")

            // for (let i = 0; i < contacts.length; i++) {
            //     console.log("looping")
            //     let isUser = await user.exists({ userName: contacts[i] });
            //     console.log(contacts[i]);
            //     if (isUser) {
            //         let dContact = await user.find({ userName: contacts[i] });
            //         DetailedContacts.push(dContact);
            //     }else{
            //         console.log("else")
            //     }
            // }
            // console.log("After looping")



            resp.status(201).json({ cont: contacts.contacts })
        }

    } catch (e) {
        console.log("error: ", e);
        resp.status(400).json({ message: "error" })
    }
}

module.exports = getcontacts;