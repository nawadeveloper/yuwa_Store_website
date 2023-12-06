const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const sendMessage = (req, res) => {
  res.json({ message: "auth controller message." });
};

const register = (req, res) => {
  const { username, password } = req.body;
  if (username.trim() === "" || password.trim() === "") {
    res.status(400).json({
      message: "Please enter all required filled.",
    });
    return;
  }

  bcrypt.hash(password, saltRounds, async (err, hash) => {
    // Store hash in your password DB.
    try {
      const addUser = await Users.create({
        username,
        password: hash,
      });
      res.json({ message: `${addUser?.username} is created.` });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  });
};

module.exports = {
  sendMessage,
  register,
};
