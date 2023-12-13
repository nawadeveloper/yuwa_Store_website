const express = require("express");
const authControllers = require("../Controllers/AuthController.js");
const passport = require("passport");

const router = express.Router();

router.get("/login/failed", authControllers.failedMessage);

router.get("/login/success", authControllers.successMessage);

router.post("/register", authControllers.register);

router.get(
  "/check_login",
  authControllers.verifyToken,
  authControllers.check_login
);

router.post("/login", authControllers.login);

router.get("/logout", authControllers.google_logout);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
