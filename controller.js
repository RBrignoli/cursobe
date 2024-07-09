const client = require('./db')


const listUsers = async (req, res) => {
    try {   
        const data = await client.query('SELECT * FROM teste')
        console.log('Query result:', data.rows);
        res.status(200).json({msg: data.rows});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};

  

module.exports = {
    listUsers
}