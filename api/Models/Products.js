const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  productName: { type: String, required: true },
  stock: { type: Number, required: true },
  imagePath: { type: String, required: true },
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
