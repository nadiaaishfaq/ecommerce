const express = require('express')
const router = express.Router()

const userControllers = require('../controllers/userControllers')

router.get('/getAllUsers', userControllers.getAllUsers)
router.get('/getUserById/:id', userControllers.getUserById)
router.put('/updateUserById/:id', userControllers.updateUserById)
router.delete('/deleteUseById/:id', userControllers.deleteUserById)

module.exports = router