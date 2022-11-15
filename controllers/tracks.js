

/**
 * Obtener lista de la base de datos!
@param {*}req
@param {*}res
**/
const getItems = (req, res) => {
    const data = ["hola", "mundo"]
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
const createItem = (req, res) => {}

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