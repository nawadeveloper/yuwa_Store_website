import ItemSample from "./ItemSample";
import Pagination from "./Pagination";
const DisplaySection = () => {
  return (
    <section className="display_size_noPadding px-5 sm:px-16 md:px-1 mt-20">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-rambow-400 md:text-lg">
            Our Collection
          </h2>
          <a className="underline text-xs text-blue-600" href="#!">
            see all
          </a>
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
        <ItemSample img_path="black_jacket.jpeg" product_name="black_jacket" />
        <ItemSample
          img_path="bassball_jacket.jpeg"
          product_name="bassball_jacket"
        />
        <ItemSample img_path="black_jacket.jpeg" product_name="black_jacket" />
        <ItemSample
          img_path="bassball_jacket.jpeg"
          product_name="bassball_jacket"
        />
        <ItemSample
          img_path="bassball_jacket.jpeg"
          product_name="bassball_jacket"
        />
        <ItemSample img_path="black_jacket.jpeg" product_name="black_jacket" />
      </div>

      <Pagination />
    </section>
  );
};

export default DisplaySection;
