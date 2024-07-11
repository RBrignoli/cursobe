const express = require("express");
const controlador = require("./controller-auth");
const router = express.Router();

router.post("/login", controlador.login);
router.get("/signout", controlador.signout);

module.exports = router;
