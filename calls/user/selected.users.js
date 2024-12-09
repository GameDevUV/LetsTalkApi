const user = require('../../Modal/user.models');


const selected = async (req, resp) => {
    try {
        const { userName } = req.query;
        if (!(userName) || userName === null) {
            resp.status(201).json({ message: 'user name missing something missing' });
        }
        let userExists = await user.exists({userName: userName});
        if(!userExists){
            resp.status(401).json({ message: 'user not exists' });
        }

        let usr = await user.findOne({userName : userName});
        let contacts = usr.contacts;

        let fullContacts = []

        if(contacts === 'null'){
            resp.status(201).json({ contacts , fullContacts});
        }else{
            await Promise.all(contacts.map( async (i) =>{
                let x = await user.findOne({userName : i});
                console.log(i);
                fullContacts.push(x);
            }))

            console.log(fullContacts);

            let fuContacts = [];

            for (let i = 0; i < fullContacts.length; i++) {
                if(fullContacts[i] !== null){
                    fuContacts.push(fullContacts[i]);
                }
            }
            
            resp.status(201).json({fullContacts : fuContacts });
        }


    } catch (e) {
        console.log("error in selected user", e);
        resp.status(401).json({ message: 'error' })
    }
}

module.exports = selected;