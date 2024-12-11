require('dotenv').config();
const mongoose = require('mongoose');

const conn =() => mongoose.connect(process.env.ATLAS_LINK).then(()=>{
    console.log("connected successfully");
  })


module.exports = conn;