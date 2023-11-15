const Product = require('../models/product')
const slugify = require('slugify')

const createProduct = async(req, res) => {
    try {
        const { name, desc, price, quantity, category } = req.body
        const product = new Product({
            name,
            desc,
            price,
            quantity,
            category
        })
        if(req.file){
            product.img = req.file.path
        }
        await product.save()
        res.status(201).send({
            success : true,
            message : "Product Created Successfully",
            product
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success : false,
            message : "Error While Creating Product",
            error
        })
    }
}

module.exports = createProduct;