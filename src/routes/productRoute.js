const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

router.get('/', productController.getAllProduct)
router.get('/category', productController.getAllCategory)
router.get('/:id', productController.getProductById)


module.exports = router