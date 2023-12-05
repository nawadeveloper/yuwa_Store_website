const sendMessage = (req, res) => {
  res.json({ message: "auth controller message." });
};

module.exports = {
  sendMessage,
};
