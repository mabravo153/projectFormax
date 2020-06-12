const productModel = require('../models/productModel');
const { QueryTypes } = require('sequelize')
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
                msg: 'Products not found'
            }
        }

    } catch (error) {
       
        console.error(error)
        data = {
            code: 500,
            msg: 'Internal Server Error'
        }
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
    
        console.error(error);
        data = {
            code: 500,
            msg: 'Internal Server Error'
        }
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
            code: 500,
            msg: 'Internal Server Error'
        }
        
    }

    return res.status(data['code']).json(data)

}

exports.updateProduct = async (req,res) => {

    const SKU = req.params.SKU
    const productWill = req.body
    try{
       
        const product = await productModel.update(productWill, {
            where: {
                SKU
            }
        })
        
        if (product[0]) {
            
            data = {
                code: 200,
                msg: 'Product updated'
            }

        } else {
            data = {
                code: 404,
                msg: "Product can't be updated, not found"
            }
        }

    }catch(error){

        console.error(error)
        data = {
            code: 500,
            msg: 'Internal Server Error'
        }

    }

    return res.status(data['code']).json(data)
}

exports.destroy = async (req,res) => {

    const SKU = req.params.SKU
    let data;
    try {
        const destroy = await productModel.destroy({
            where: {
                SKU
            }
        })

        if(destroy){
            data = {
                code: 200,
                msg: 'Product deleted'
            }
        }else{
            data = {
                code: 404,
                msg: 'Product not found'
            }
        }
    

    }catch (error){
        console.error(error)
        data = {
            code: 500,
            msg: 'Internal Server Error'
        }
    }


    return res.status(data['code']).json(data)

}