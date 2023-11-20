import logo from "../assets/yuwa_logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="relative">
      <div className="bg-rambow-100 text-rambow-400 text-md p-1 text-center border-b-2 border-rambow-300">
        <p>Enjoy 25% or above discount while shopping in our local store !</p>
      </div>

      <div className="display_size flex py-4 justify-between items-center border-b-2 border-rambow-300">
        <a href="#" className="shrink-0">
          <img src={logo} alt="y" />
        </a>
        <div className="flex-auto mx-9 flex border-2 border-rambow-200 rounded-md overflow-hidden">
          <label
            htmlFor="search_product"
            className="material-symbols-rounded p-1 text-2xl cursor-pointer shrink-0"
          >
            search
          </label>
          <input
            type="text"
            id="search_product"
            placeholder="Search For Our Product."
            className="border-l-2 flex-auto text-sm md:text-xl px-2 border-rambow-200 focus:outline-0"
          />
        </div>

        <div className="shrink-0">
          <button className="pr-2 py-1 text-base md:text-xl border-r border-rambow-200 sm:pr-5">
            sign in{" "}
            <span className="material-symbols-rounded align-middle leading-none text-lg md:text-2xl">
              login
            </span>
          </button>
          <button className="pl-2 py-1 text-base md:text-xl border-l border-rambow-200 sm:pl-5">
            liked{" "}
            <span className="material-symbols-rounded filled align-middle leading-none text-lg md:text-2xl">
              favorite
            </span>
          </button>
        </div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
