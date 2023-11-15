const express = require('express')
const router = express.Router()

const authControllers = require('../controllers/authControllers')

router.post('/sign-up', authControllers.signUp)
router.post('/login', authControllers.logIn)

module.exports = router