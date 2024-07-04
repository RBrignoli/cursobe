const db = require('../db')


const listUsers = async (req, res) => {
    try {   
        const data = await db.client.query('SELECT * FROM teste')
        console.log('Query result:', data.rows);
        res.status(200).json({msg: data.rows});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};

const setup = async (req, res) => {
    try {   
        const data = await db.client.query('CREATE TABLE teste( id SERIAL PRIMARY KEY, name VARCHAR(100) )')
        res.status(200).json({msg: 'table created'});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};
  

module.exports = {
    listUsers,
    setup
}