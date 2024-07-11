const {client} = require('./db')


const listUsers = async (req, res) => {
    try {   
        const data = await client.query('SELECT * FROM usuarios')
        console.log('Query result:', data.rows);
        res.status(200).json({msg: data.rows});
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500)
    }
};


const getUser = async (req, res) => {
    res.status(200).json({msg: 'usuario ramon'})
}
const createUser = async (req, res) => {
    res.status(200).json({msg: 'criado'})
}
const updateUser = async (req, res) => {
    res.status(200).json({msg: 'atualizado'})
}
const deleteUser = async (req, res) => {
    res.status(200).json({msg: 'deletado'})
}


  

module.exports = {
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    getUser
}