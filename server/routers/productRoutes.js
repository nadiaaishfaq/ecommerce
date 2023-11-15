const express = require('express')
const router = express.Router()

const createProduct = require('../controllers/productControllers')
const upload = require('../middlewares/upload')

router.post('/createProduct', upload.single('img'), createProduct)

module.exports = router