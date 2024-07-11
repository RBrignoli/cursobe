const express = require("express");
const controlador = require("./controller-user");
const { setup, drop } = require("./db");
const router = express.Router();

router.get("/", controlador.listUsers);
router.get("/:id", controlador.getUser);
router.post("/", controlador.createUser);
router.post("/:id", controlador.updateUser);
router.delete("/:id", controlador.deleteUser);

// router.get("/setup", setup);
// router.get("/drop", drop);

module.exports = router;
