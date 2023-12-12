const Products = require("../Models/Products");
const Users = require("../Models/Users");
const fs = require("fs");

const addProduct = async (req, res) => {
  const { productName, stock } = req.body;
  const { originalname, path } = req.file;

  if (productName.trim() === "" || path === "") {
    res.json({ message: "Please fill all required form." });
    fs.unlink(path, (error) => {
      console.log(error);
    });
    return;
  }

  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  try {
    const createProduct = await Products.create({
      productName,
      stock,
      imagePath: newPath,
    });

    if (createProduct) {
      res.json({
        message: `${productName} is added to the product list.`,
        upload: true,
      });
    } else {
      fs.unlink(newPath, (error) => {
        console.log(error);
      });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const getProductList = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 4;

  try {
    const totalProducts = await Products.countDocuments();
    const totalPages = Math.ceil(totalProducts / pageSize);

    const products = await Products.find()
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    if (products) {
      res.json({
        message: products,
        currentPage: page,
        totalPages,
        totalProducts,
      });
      return;
    } else {
      res.json({ message: [{ imagePath: "", productName: "", _id: "" }] });
    }
  } catch (e) {
    res
      .status(400)
      .json({ message: [{ imagePath: "", productName: "", _id: "" }] });
  }
};

const addOrRemoveLike = async (req, res) => {
  const productId = req.query.productId;
  const decoded = req.user;

  try {
    const userData = await Users.findOne({ username: decoded?.username });

    if (userData) {
      const likedProducts = userData.likedProducts;
      const index = likedProducts.indexOf(productId);
      if (index !== -1) {
        likedProducts.splice(index, 1);
      } else {
        likedProducts.push(productId);
      }

      userData.likedProducts = likedProducts;

      await userData.save();

      res.json(likedProducts);
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  } catch (e) {
    res.status(400).json({ message: e });
  }
};

const getProductsByIdList = async (req, res) => {
  if (!req.query.productIds) {
    return res.json({ message: "productIds required." });
  }
  const productIds = req.query.productIds.split(",");

  try {
    const productData = await Products.find({
      _id: {
        $in: productIds,
      },
    });

    if (productData) {
      res.json({ data: productData });
    }
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = {
  addProduct,
  getProductList,
  addOrRemoveLike,
  getProductsByIdList,
};
