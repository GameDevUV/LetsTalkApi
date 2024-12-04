const user = require('../../Modal/user.models');

const status = async (req, resp) => {

    console.log("hii by change status");

    const { status, userName } = req.body;

    try {
        if (!userName || !status) {
            resp.status(401).json({ message: 'give valid information' });
        }

        const isExists = await user.exists({ userName });

        if (!isExists) {
            resp.status(401).json({ message: 'not a valid userName' });
        }

        await user.findOneAndUpdate(
            {
                userName
            },
            {
                $set: {
                    status
                }
            },
            {
                new: true
            }
        )

        resp.status(201).json({ message: 'now user is ONLINE' });

    } catch (error) {
        console.log(error);
    }
}


module.exports = status