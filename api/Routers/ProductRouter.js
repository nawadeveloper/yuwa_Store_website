const express = require("express");
const multer = require("multer");
const productController = require("../Controllers/ProdcutController");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post(
  "/addProduct",
  upload.single("productImage"),
  productController.addProduct
);

module.exports = router;
