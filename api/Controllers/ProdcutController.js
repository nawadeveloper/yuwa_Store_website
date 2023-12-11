const Products = require("../Models/Products");
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

module.exports = {
  addProduct,
};
