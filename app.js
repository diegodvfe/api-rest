
require("dotenv").config()
const express = require('express');
const cors = require('cors');
const app = express();

const dbConnect = require('./config/mongo.js')


app.use(cors());

const port = process.env.PORT || 3000;

/* aqui invocamos nuestras rutas*/

// TODO localhost/api/_________________ = ejemplo (localhost/api/tracks)-> esta no es dinamica
app.use("/api", require("./routes"))

app.listen(port,()=>{
    console.log( ` http://localhost:${port} `)
})

dbConnect()