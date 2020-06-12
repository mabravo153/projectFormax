const express = require('express')
const Routes = express.Router()
const productController = require('../controllers/producController')


const rutas = () => {

    Routes.get('/products', productController.show)

    Routes.get('/products/:SKU', productController.getProduct)

    Routes.post('/products', productController.store)


    return Routes
}



module.exports = rutas