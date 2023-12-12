import { Link } from "react-router-dom";
import ItemSample from "./ItemSample";
import { useState, useEffect } from "react";
import PaginationButton from "./PaginationButton";

const getProductList = (getProducts, setTotalPages, currentPage) => {
  fetch(`http://localhost:4000/product/getProductList?page=${currentPage}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      getProducts(data?.message);
      setTotalPages(data?.totalPages);
    })
    .catch((e) => console.log(e));
};

const DisplaySection = () => {
  const [products, getProducts] = useState([
    { imagePath: "", productName: "", id: "" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      changePage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      changePage(currentPage + 1);
    }
  };

  useEffect(() => {
    getProductList(getProducts, setTotalPages, currentPage);
  }, [currentPage]);

  return (
    <section className="display_size_noPadding px-5 sm:px-16 md:px-1 mt-20">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-rambow-400 md:text-lg">
            Our Collection
          </h2>
          <Link className="underline text-xs text-blue-600" to="products">
            see all
          </Link>
        </div>
        <select
          className="p-1 rounded-md border-2 border-rambow-400"
          name="filter"
          id="filter"
        >
          <option value="latest">latest</option>
          <option value="women">women</option>
          <option value="men">men</option>
          <option value="kids">kids</option>
        </select>
      </div>

      <div className="gap-5 grid grid-template mt-5">
        {products.map((data) => (
          <ItemSample
            key={data._id}
            product_name={data.productName}
            img_path={`http://localhost:4000/${data.imagePath}`}
            id={data._id}
          />
        ))}
      </div>

      <div className="pt-8 pb-6 flex gap-3 justify-center items-center">
        <button
          onClick={prevPage}
          className="w-10 h-10 flex justify-center items-center p-1 border-2 border-rambow-300 text-rambow-400 rounded-lg hover:bg-rambow-100"
        >
          <span className="material-symbols-rounded">chevron_left</span>
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationButton
            key={index}
            num={index + 1}
            changePage={changePage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        ))}

        <button
          onClick={nextPage}
          className="w-10 h-10 flex justify-center items-center p-1 border-2 border-rambow-300 text-rambow-400 rounded-lg hover:bg-rambow-100"
        >
          <span className="material-symbols-rounded">chevron_right</span>
        </button>
      </div>
    </section>
  );
};

export default DisplaySection;
