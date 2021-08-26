require('dotenv').config()
const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
require('./bot/core')
require('./bot/action')
const path = require('path').join(__dirname, '/public/uploads');

app.use('/public/uploads', express.static(path));

const connectDB=require('./config/db')
connectDB()

app.use(bodyParser.json())
app.use(cors())

app.use('/api/action', require('./routes/action'))
app.use('/api/vedio', require('./routes/vedios'))

const PORT=5000;

app.listen(PORT, ()=>{
    console.log(`Server is running to ${PORT}`)
})