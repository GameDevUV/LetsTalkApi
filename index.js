const express = require('express');
const app = express();
const routes = require('./routes/Routes')
const cors = require('cors')

const conn = require('./connectMongodb/conn');
let connect = conn();

app.use(cors());
app.use(express.json());
app.use('/' , routes)


app.listen(5000 , ()=>{
    console.log("app is running at 5000");
})