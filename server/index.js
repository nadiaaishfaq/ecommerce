const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const mongoose = require('./config/connection')

//routes
const authRoutes = require('./routers/authRoutes')
const userRoutes = require('./routers/userRoutes')
const categoryRoutes = require('./routers/categoryRoutes')
const productRoutes = require('./routers/productRoutes')

const dotenv = require('dotenv')
dotenv.config()

let port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/uploads',express.static('uploads'))
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/category', categoryRoutes)
app.use('/product', productRoutes)



app.listen(port, ()=>{
    console.log(`Server is running at http:/localhost/${port}`);
})

