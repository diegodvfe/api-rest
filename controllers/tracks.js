
const {tracksModel} = require('../models/index')

/**
 * Obtener lista de la base de datos!
@param {*}req
@param {*}res
**/
const getItems = async (req, res) => {
    const data = await tracksModel.find({});

    res.send({data}) 

}

/**
 * Obtener un detalle!
@param {*}req
@param {*}res
**/
const getItem = (req, res) => {}

/**
 * Obtener registro!
@param {*}req
@param {*}res
**/

// Entonces creamos una constante que tenga una respuesta y pregunta
const createItem = async (req, res) => {
    // utilizamos destructuracion para no hacer esto const body = req.body 
    const {body} = req 
    // le pasamos un 
    console.log(body)
    //guaradamos los datos en una variable y await para que responda 
    // importamos tracksModel 
    // usamos un parametro create( body)
    const data = await tracksModel.create(body)
    res.send({data})// el controlador debe de retonar algo 
}

/**
 * Obtener una actualizacion!
@param {*}req
@param {*}res
**/
const updateItem = (req, res) => {}

/**
 * Obtener un dato eliminado!
@param {*}req
@param {*}res
**/
const deleteItem = (req, res) => {}

module.exports = {getItems, getItem, createItem, updateItem, deleteItem};