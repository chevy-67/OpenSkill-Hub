const express = require('express')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const dataRoutes = require('./routes/dataRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(MONGO_URI)
.then(()=>console.log('MongoDB connected...'))
.catch((err)=>console.log('Error in connecting with MongoDB'+err))

app.use('/api/users',userRoutes)
app.use('/api/generic/',dataRoutes)

app.listen(PORT,()=>console.log(`Server listening at ${PORT}...`))