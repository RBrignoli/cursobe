const { client } = require('./db')
const bycryptjs = require("bcryptjs"); 



const listUsers = async (req, res) => {
    try {   
        const data = await client.query('SELECT * FROM usuarios')
        console.log('Query result:', data.rows);
        res.status(200).json({msg: data.rows});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({msg: 'Error listing users'});
    }
};

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await client.query(`SELECT * FROM usuarios WHERE id = $1`, [id]);
        if (data.rows.length === 0) {
            res.status(404).json({msg: 'User not found'});
        } else {
            res.status(200).json({msg: data.rows[0]});
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({msg: 'Error getting user'});
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body; 
        const hashedPassword = await bycryptjs.hashSync(password, 10);

        const sql = `INSERT INTO usuarios (name, email, password) VALUES ($1, $2, $3) RETURNING *`
        const data = await client.query(sql, [name, email, hashedPassword]);
        res.status(201).json({msg: 'User created successfully', user: data.rows[0]});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({msg: 'Error creating user'});
    }
};

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email } = req.body;
        const data = await client.query(`UPDATE usuarios SET name = $1, email = $2 WHERE id = $3 RETURNING *`, [name, email, id]);
        if (data.rows.length === 0) {
            res.status(404).json({msg: 'User not found'});
        } else {
            res.status(200).json({msg: 'User updated successfully', user: data.rows[0]});
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({msg: 'Error updating user'});
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await client.query(`DELETE FROM usuarios WHERE id = $1`, [id]);
        if (data.rowCount === 0) {
            res.status(404).json({msg: 'User not found'});
        } else {
            res.status(200).json({msg: 'User deleted successfully'});
        }
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({msg: 'Error deleting user'});
    }
};

  

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser
}