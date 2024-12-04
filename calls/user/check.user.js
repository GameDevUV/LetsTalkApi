const user = require('../../Modal/user.models');

const check =  async (req , resp)=>{
    try{
        const email = req.query.mail;

        const isExisting = await user.exists({email : email});
        if(isExisting){
            resp.status(201).json({find : true})
        }else{
            resp.status(201).json({find : false})
        }
        
    }catch(e){
        console.log("error in user : ", e);
    }
}

module.exports = check;