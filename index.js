const express = require('express')
const app = express()
const { connectDB } = require('./db')
const rotas = require("./rotas");

  
connectDB();

app.use("/usuarios", rotas);

app.listen(3000)