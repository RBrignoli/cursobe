const express = require("express");
const controlador = require("./controller")
const { setup } = require("./db")
const router = express.Router();


router.get("/", controlador.listUsers);
router.get("/setup", setup);


module.exports = router;
