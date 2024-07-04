const express = require("express");
const router = express.Router();
const userController = require("../controladores/userController")


router.get("/", userController.listUsers);
router.get("/setup", userController.setup);


module.exports = router;
