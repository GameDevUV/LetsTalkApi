const user = require('../../Modal/user.models')

// login and signup
const add = async (req, resp) => {
  console.log("hii by login")
  try {
    const { userId, userName, displayName, profilePicture, email, status, MobileNumber, passKey, contacts, password , aboutme } = req.body; 

    const userExiste = await user.exists({ userName });


    if (userExiste) {
      const correct = await user.exists({
        userName,
        password
      })
      if (correct) {
        resp.status(201).json({ message: "logged in successfully", status: true })
      } else {
        resp.status(402).json({ message: "invalid user name", status: false })
      }
    } else {
      const newUser = new user({
        userId,
        userName,
        displayName,
        email,
        status,
        profilePicture,
        MobileNumber,
        contacts,
        password,
        passKey,
        aboutme
      });

      await newUser.save();
      console.log('Submitted successfully');
      resp.status(201).json({ message: 'User added successfully' });
    }

  } catch (error) {
    console.error('Error saving user:', error.message);
    resp.status(400).json({ error: error.message });
  }
};

module.exports = add;
