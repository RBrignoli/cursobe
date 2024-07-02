const express = require('express')
const { Client } = require('pg')
const app = express()

const client = new Client({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'

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