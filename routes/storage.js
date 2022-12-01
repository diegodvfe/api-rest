const express = require('express')
const router = express.Router();
const multer = require("multer")


const storage = multer.diskStorage({
        destination: function(req, file, callback){
                const pathStorage = `${__dirname}/../storage`
                callback(null, pathStorage)
        },
        filename: function(req, file, callback) {
                //TODO: MI ADJUNTO O ARCHIVOS
                const ext = file.originalname.split(".").pop() // todo name, png, mp3, mp4
                const filename = `file-${Date.now()}.${ext}`
                callback(null, filename) 
        }
})


router.post("/", (req, res)=>{
        res.send({a:1})
})


module.exports = router;