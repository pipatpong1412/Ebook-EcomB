const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.get('/', productController.getAllProduct)
router.post('/newProduct', productController.createProduct)
router.get('/:id', productController.getProductById)


module.exports = router