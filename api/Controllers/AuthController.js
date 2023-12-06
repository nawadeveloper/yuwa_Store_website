const Users = require("../Models/Users");

const sendMessage = (req, res) => {
  res.json({ message: "auth controller message." });
};

const register = async (req, res) => {
  const { username, password } = req.body;
  if (username === "" || password === "") {
    res.status(400).json({
      message: "Please enter all required filled.",
    });
    return;
  }

  try {
    const addUser = await Users.create({
      username,
      password,
    });
    res.json({ message: `${addUser?.username} is created.` });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

module.exports = {
  sendMessage,
  register,
};
