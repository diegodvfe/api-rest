const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect((DB_URI), {
        useNewUrlParser: true,
        userUnifiedTopology: true,
    }, (err, res) => {
        if (!err){
            console.log(`*****CONEXION CORRECTA *****`);
        } else{
            console.log(`***** CONEXION INCORRECTA ***`);
        }
    });

}

module.exports = dbConnect

//mongodb+srv://diegoapi:J35dD5rRrLU0FIUG@cluster0.h4topce.mongodb.net/dbapi?retryWrites=true&w=majority
