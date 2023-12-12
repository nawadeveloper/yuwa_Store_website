const express = require("express");
const multer = require("multer");
const productController = require("../Controllers/ProdcutController");
const authControllers = require("../Controllers/AuthController");

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post(
  "/addProduct",
  upload.single("productImage"),
  productController.addProduct
);

router.get("/getProductList", productController.getProductList);

router.get(
  "/addOrRemoveLike",
  authControllers.verifyToken,
  productController.addOrRemoveLike
);

router.get("/getProductsByIdList", productController.getProductsByIdList);

module.exports = router;
