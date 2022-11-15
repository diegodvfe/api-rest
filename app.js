
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const app = express();

const dbConnect = require('./config/mongo.js')


app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log( ` http://localhost:${port} `)
})

dbConnect()