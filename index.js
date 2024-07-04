const express = require('express')
const app = express()
const { connectDB } = require('./db')
  
connectDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)