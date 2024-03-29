const productService = require('../services/productService')

exports.getAllProduct = async (req, res, next) => {
    try {
        const allproduct = await productService.getAllProduct()
        res.json(allproduct)

    } catch (error) {
        next(error)
    }
}

exports.adminGetProduct = async (req, res, next) => {
    const skip = req.query.skip

    try {
        const allproduct = await productService.adminGetProduct(skip)
        res.json(allproduct)

    } catch (error) {
        next(error)
    }
}

exports.getProductById = async (req, res, next) => {
    try {
        const { productId } = req.params
        const getProduct = await productService.getProductById(productId)
        res.json(getProduct)

    } catch (error) {
        next(error)
    }
}


exports.createProduct = async (req, res, next) => {
    const { name, img, detail, price, author, publisher, url, categoryId } = req.body


    try {
        const product = await productService.createProduct(name, img, detail, price, author, publisher, url, categoryId)
        res.json(product)

    } catch (error) {
        next(error)
    }
}

exports.deleteProduct = async (req, res, next) => {
    const { productId } = req.params

    try {
        const product = await productService.deleteProduct(productId)
        res.json(product)

    } catch (error) {
        next(error)
    }
}

exports.updateProduct = async (req, res, next) => {
    const { productId } = req.params
    const { name, img, detail, price, author, publisher, url, categoryId } = req.body

    try {
        const product = await productService.updateProduct(productId, name, img, detail, price, author, publisher, url, categoryId)
        res.json(product)

    } catch (error) {
        next(error)
    }
}

exports.searchProduct = async (req, res, next) => {
    try {
        const product = req.query.product
        const rs = await productService.getProductByName(product)
        res.json(rs)
    } catch (error) {
        next(error)
    }
}