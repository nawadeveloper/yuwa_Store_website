import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ItemSample = ({ img_path, product_name, id }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [like, setLike] = useState(false);
  // console.log(userInfo);

  const toggleLiked = async () => {
    const response = await fetch(
      `http://localhost:4000/product/addOrRemoveLike?productId=${id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const likedProducts = await response.json();

    if (response.ok) {
      setUserInfo({ ...userInfo, likedProducts });
      setLike((prev) => !prev);
    }
  };

  useEffect(() => {
    userInfo?.likedProducts.includes(id) ? setLike(true) : setLike(false);
  }, []);

  return (
    <motion.div
      exit={{ scale: 0.3, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-rambow-400 p-2 pb-0 rounded-sm"
    >
      <div className="h-64 md:h-80 border border-rambow-400 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          loading="lazy"
          src={img_path}
          alt="product"
        />
      </div>

      <div className="flex py-2 justify-between">
        <h4 className="font-bold text-sm">
          <a href="#">{product_name}</a>
        </h4>
        <span
          onClick={toggleLiked}
          className={`material-symbols-rounded cursor-pointer ${
            like ? "filled" : ""
          }`}
        >
          favorite
        </span>
      </div>
    </motion.div>
  );
};

export default ItemSample;
