const productModel = require('../models/productModel');
const uuid = require('uuid')


exports.show = async (req,res) => {

    let data; 

    try {
        const products = await productModel.findAll();

        if(products.length){
            data = {
                code: 200,
                msg: products
            }
        }else{
            data = {
                code: 404,
                msg: 'Object not found'
            }
        }

    } catch (error) {
        data = {
            code: 400,
            msg: error
        }
        console.error(error)
    }
    
    return res.status(data['code']).json(data);

}

exports.store = async (req, res) => {

    let data;
    const { nombre, tipo, precio, proveedor } = req.body
    const SKU = uuid.v4()

    console.log(req.body);
    


    try {
        await productModel.create({
            SKU,
            nombre,
            tipo,
            precio,
            proveedor
        })
        data = {
            code: 200,
            mgs: 'Product created'
        }
    } catch (error) {
        data = {
            code: 400,
            mgs: error
        }
        console.error(error);
    }

    return res.status(data['code']).json(data)

}

exports.getProduct = async (req, res) => {

    const SKU = req.params.SKU
    let data;    
    try {
        
        const product = await productModel.findOne({where: { SKU }})

        if(product){
            data = {
                code: 200,
                msg: product
            }
        }else{
            data = {
                code: 404,
                msg: 'Product not found'
            }
        }

    } catch (error) {

        console.error(error)
        data = {
            code: 400,
            msg: error
        }

        
    }

    return res.status(data['code']).json(data)

}