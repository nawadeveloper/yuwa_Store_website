const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

//helper function

function getCookieVerifyInfo(token_cookie) {
  let data;
  jwt.verify(token_cookie, "process.env.PRIVATE_KEY", {}, (err, decoded) => {
    if (err) throw err;
    data = decoded;
  });
  return data;
}

//main functions
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
    try {
      const addUser = await Users.create({
        username,
        password: hash,
      });

      const dataForCookie = { username: addUser.username, userId: addUser._id };

      var token = jwt.sign(dataForCookie, process.env.PRIVATE_KEY, {});

      res.cookie("yuwa_user", token);

      res.json({ message: `${addUser?.username} is created.` });
    } catch (e) {
      if (e.code === 11000) {
        res.status(400).json({
          message: `username ${username} is already in taken. Please choose different username.`,
        });
      } else {
        res.status(400).json({ message: e.message });
      }
    }
  });
};

module.exports = {
  sendMessage,
  register,
};
