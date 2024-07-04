const express = require('express')
const app = express()
const { connectDB } = require('./db')
const usersRoute = require("./rotas/user");

  
connectDB();

app.use("/users", usersRoute);

app.listen(3000)