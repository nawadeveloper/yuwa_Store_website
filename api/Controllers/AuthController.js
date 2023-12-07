const Users = require("../Models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;

//helper function
function addTokenToCookie(dataForCookie, response) {
  const token = jwt.sign(dataForCookie, process.env.PRIVATE_KEY, {});
  response.cookie("yuwa_user", token);
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
    if (err) throw err;
    try {
      const addUser = await Users.create({
        username,
        password: hash,
      });

      const dataForCookie = { username: addUser.username, userId: addUser._id };

      addTokenToCookie(dataForCookie, res);

      res.json({ message: `${addUser?.username} is created.`, register: true });
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

const check_login = (req, res) => {
  const token = req.cookies;

  try {
    jwt.verify(
      token.yuwa_user,
      process.env.PRIVATE_KEY,
      {},
      async (err, decoded) => {
        if (err) throw err;

        const defaultValues = {
          username: "",
          userId: "",
          logedIn: false,
        };

        const userData = await Users.findOne({ username: decoded.username });
        if (decoded.userId == userData._id) {
          res.json({
            username: decoded.username,
            userId: decoded.userId,
            logedIn: true,
          });
        } else {
          res.json(defaultValues);
        }
      }
    );
  } catch (e) {
    res.json(defaultValues);
  }
};

module.exports = {
  sendMessage,
  register,
  check_login,
};
