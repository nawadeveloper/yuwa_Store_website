import { UserContext } from "./UserContext";
import { useContext, useEffect, useState } from "react";
import ItemSample from "./ItemSample";
import { motion, AnimatePresence } from "framer-motion";

const getProductData = async (setProductData, likedProducts) => {
  const response = await fetch(
    `http://localhost:4000/product/getProductsByIdList?productIds=${likedProducts}`,
    {
      method: "GET",
    }
  );

  if (response.ok) {
    const data = await response.json();

    setProductData(data.data);
  }
};

const LikedItems = () => {
  const { userInfo } = useContext(UserContext);
  const [productData, setProductData] = useState();

  const likedProducts = userInfo?.likedProducts;

  useEffect(() => {
    getProductData(setProductData, likedProducts);
  }, [`${userInfo.likedProducts}`]);

  return (
    <div className="display_size_noPadding py-20 gap-5 grid-fixed-size grid mt-5">
      {productData?.map((data) => (
        <AnimatePresence mode="wait">
          <motion.div
            key={data._id}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <ItemSample
              key={data.img_path}
              product_name={data.productName}
              img_path={`http://localhost:4000/${data.imagePath}`}
              id={data._id}
            />
          </motion.div>
        </AnimatePresence>
      ))}
    </div>
  );
};

export default LikedItems;
