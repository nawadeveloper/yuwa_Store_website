const express = require("express");
const authControllers = require("../Controllers/AuthController.js");

const router = express.Router();

router.get("/", authControllers.sendMessage);

router.post("/register", authControllers.register);

router.get("/check_login", authControllers.check_login);

module.exports = router;
