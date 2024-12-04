const user = require('../../Modal/user.models');


const selected = async (req, resp) => {
    console.log("hii by selected user");
    try {
        const { userName } = req.query;
        if (!(userName)) {
            resp.status(401).json({ message: 'something missing' });
        }
        let userExists = await user.exists({userName: userName});
        if(!userExists){
            resp.status(401).json({ message: 'user not exists' });
        }

        let usr = await user.findOne({userName : userName});
        let contacts = usr.contacts;
        let fullContacts = []
        contacts !== null ? await Promise.all(contacts.map( async (i) =>{
            let x = await user.findOne({userName : i});
            console.log(i);
            fullContacts.push(x);
        })) : fullContacts = []
        console.log(fullContacts);
        resp.status(201).json({fullContacts });
    } catch (e) {
        console.log("error in selected user", e);
        resp.status(401).json({ message: 'error' })
    }
}

module.exports = selected;