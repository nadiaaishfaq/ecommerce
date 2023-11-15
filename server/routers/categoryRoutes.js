const express = require("express")
const router = express.Router()
const categoryControllers = require('../controllers/categoryControllers')

router.post('/createCategory', categoryControllers.createCategory)
router.get('/getAllCategories', categoryControllers.getCategory)
router.get('/getCategoryById/:id', categoryControllers.getCategoryById)
router.get('/getCategoryByName/:name', categoryControllers.getCategoryByName)
router.put('/updateCategoryById/:id', categoryControllers.updateCategoryById)
router.delete('/deleteCategoryById/:id', categoryControllers.deleteCategoryById)

module.exports = router