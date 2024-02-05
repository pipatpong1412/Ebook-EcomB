const productService = require('../services/productService')

exports.getAllProduct = async (req, res, next) => {
    try {
        const allproduct = await productService.getAllProduct()
        res.json( allproduct )

    } catch (error) {
        next(error)
    }
}

exports.getProductById = async (req, res, next) => {
    res.json({ message: 'Get Product By ID' })
}