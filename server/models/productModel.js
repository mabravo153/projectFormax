const { DataTypes } = require('sequelize')
const connect = require('../config');
const  validator  = require('validator')
 
const productModel = connect.define('producto', {
    SKU: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true
        }
    },
    proveedor: {
        type: DataTypes.INTEGER
    } 
})



module.exports = productModel