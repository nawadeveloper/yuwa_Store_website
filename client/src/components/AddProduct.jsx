import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [itemPic, setItemPic] = useState(null);

  const getImageForPreview = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItemPic(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
    <>
      <div className="display_size h-[calc(100vh-64px)] grid md:grid-cols-2 place-content-center">
        <div className="border min-h-[400px] border-black rounded-t-2xl overflow-hidden">
          <h2 className="text-center bg-rambow-400 font-bold text-3xl py-2 text-white">
            Add Item
          </h2>
          <form className="flex flex-col justify-center px-16 gap-3 h-full">
            <label
              htmlFor="choose_img"
              className="underline underline-offset-4 text-violet-500 cursor-pointer hover:no-underline max-w-max"
            >
              choose image for your product
            </label>

            <input
              className="hidden"
              type="file"
              accept="image/*"
              id="choose_img"
              onChange={getImageForPreview}
            />

            <div className="grid grid-cols-6 gap-2 place-content-center">
              <label className="col-span-2" htmlFor="product_name">
                Name of Product:
              </label>
              <input
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border border-rambow-400 col-span-4 p-1 rounded-md"
                type="text"
                id="product_name"
                placeholder="product name"
              />
              <label className="col-span-2" htmlFor="product_quantity">
                Total Stock:
              </label>
              <input
                className="border border-rambow-400 col-span-4 p-1 rounded-md"
                type="number"
                id="product_quantity"
                placeholder="quantity of Item"
              />
            </div>

            <button className="bg-rambow-300 mt-5 mx-auto px-16 py-1 text-white rounded-full font-bold">
              ADD
            </button>
          </form>
        </div>

        <div className="hidden md:flex flex-col justify-center items-center gap-3 text-rambow-400">
          <h2 className="font-bold text-2xl">Preview</h2>
          <div className="flex flex-col w-[250px] h-[400px] max-h-[400px] rounded-sm p-2 pb-0 border border-rambow-400">
            <div className="w-full max-h-full overflow-hidden flex-grow border border-rambow-400 bg-rambow-100">
              <AnimatePresence mode="wait">
                {itemPic && (
                  <motion.img
                    key={itemPic}
                    src={itemPic}
                    alt="Product_Image"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.3, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </div>
            <h2 className="py-2 min-h-[44px] text-lg font-bold">
              {productName}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
