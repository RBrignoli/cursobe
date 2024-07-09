const express = require("express");
const router = express.Router();
const controlador = require("./controller")
const setup = require("./db")


router.get("/", controlador.listUsers);
router.get("/setup", setup);


module.exports = router;
