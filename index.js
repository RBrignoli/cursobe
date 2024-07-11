const express = require('express')
const app = express()
const { connectDB } = require('./db')
const rotas_crud = require("./rotas-crud");
const rotas_auth = require("./rotas-auth");

  
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/usuarios", rotas_crud);
app.use("/auth", rotas_auth);



app.listen(3000)