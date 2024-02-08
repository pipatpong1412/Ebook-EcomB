const productService = require('../services/productService')

exports.getAllProduct = async (req, res, next) => {
    try {
        const allproduct = await productService.getAllProduct()
        res.json(allproduct)

    } catch (error) {
        next(error)
    }
}

exports.getProductById = async (req, res, next) => {
    res.json({ message: 'Get Product By ID' })
}


exports.createProduct = async (req, res, next) => {
    const { name, img, detail, price, author, publisher, categoryId } = req.body

    try {
        const product = await productService.createProduct(name, img, detail, price, author, publisher, categoryId)
        res.json(product)

    } catch (error) {
        next(error)
    }
}