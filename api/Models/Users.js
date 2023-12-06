const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
