const { Client } = require('pg')
require("dotenv").config();

const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
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

const setup = async (req, res) => {
    try {   
        const data = await client.query('CREATE TABLE usuarios( id SERIAL PRIMARY KEY, name VARCHAR(100), email VARCHAR(50), password VARCHAR(100) )')
        res.status(200).json({msg: 'table created'});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};

const drop = async (req, res) => {
    try {   
        const data = await client.query('DROP TABLE usuarios')
        res.status(200).json({msg: 'table created'});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};


module.exports = { connectDB, setup, client }