const mongoose = require('mongoose');

const conn =() => mongoose.connect('mongodb://localhost:27017/ChatLogin').then(()=>{
    console.log("connected successfully");
  })


module.exports = conn;