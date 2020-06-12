const express = require('express')
const Routes = express.Router()
const productController = require('../controllers/productController')


const rutas = () => {

    Routes.get('/products', productController.show)

    Routes.get('/products/:SKU', productController.getProduct)

    Routes.post('/products', productController.store)

    Routes.put('/products/:SKU', productController.updateProduct)

    Routes.delete('/products/:SKU', productController.destroy)

    return Routes
}



module.exports = rutas