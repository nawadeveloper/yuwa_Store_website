const express = require("express");
const authControllers = require("../Controllers/AuthController.js");

const router = express.Router();

router.get("/", authControllers.sendMessage);

module.exports = router;
