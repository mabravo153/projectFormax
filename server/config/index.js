const Sequelize = require('sequelize');
require('dotenv').config({path: 'var.env'})


const connect = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
})



module.exports = connect