const express = require("express");
const authControllers = require("../Controllers/AuthController.js");

const router = express.Router();

router.get("/", authControllers.sendMessage);

router.post("/register", authControllers.register);

router.get(
  "/check_login",
  authControllers.verifyToken,
  authControllers.check_login
);

router.post("/login", authControllers.login);

module.exports = router;
