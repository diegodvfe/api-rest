
const express = require('express')
const router = express.Router();
const fs = require('fs')

// Estas son los path que vamos estar viendo de manera dinamica

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    //TODO tracks.js []
    return fileName.split(".").shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file)//TODO useres, storage, tracks

    if (name !== "index"){ //-- si no es el index manda el nombre del file
        console.log(`Cargando rutas ${name}`)
        router.use(`/${name}`, require(`./${file}`)) // TODO http://localhost:3000/api/tracks
    }
})



module.exports = router