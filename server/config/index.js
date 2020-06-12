const Sequelize = require('sequelize');


const connect = new Sequelize('pruebaomnix', 'mabravo153', 'Barranquilla1.', {
    host: 'pruebasproyecto.cnvwfa5zqlmr.us-east-2.rds.amazonaws.com',
    dialect: 'mariadb',
})



module.exports = connect