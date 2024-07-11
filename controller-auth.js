const { client } = require('./db')
const bycryptjs = require("bcryptjs"); 



const login = async (req, res) => {
    res.status(200).json({msg: 'login'})
};

const signout = async (req, res) => {
    res.status(200).json({msg: 'signout'})
};

module.exports = {
    login,
    signout,
}