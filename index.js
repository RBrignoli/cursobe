const express = require('express')
const { Client } = require('pg')
const app = express()

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.pwd,
    database: process.env.database
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });
};
  
connectDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)