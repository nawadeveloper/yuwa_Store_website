const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  likedProducts: [{ type: Schema.Types.ObjectId, ref: "Products" }],
  admin: { type: Boolean, default: false },
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
