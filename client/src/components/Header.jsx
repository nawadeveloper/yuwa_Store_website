import logo from "../assets/yuwa_logo.png";
import Nav from "./Nav";
import SignInLink from "./SignInLink";

const Header = () => {
  return (
    <header className="relative">
      <div className="bg-rambow-100 text-rambow-400 text-sm md:text-md p-1 text-center border-b-2 border-rambow-300">
        <p>Enjoy 25% or above discount while shopping in our local store !</p>
      </div>

      <div className="display_size flex py-4 justify-between items-center border-b-2 border-rambow-300">
        <a href="#" className="shrink-0">
          <img src={logo} alt="y" />
        </a>
        <div className="flex-auto md:mx-9 mr-0 ml-9 flex border-2 border-rambow-200 rounded-md overflow-hidden">
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

        <SignInLink className="shrink-0 hidden md:flex" />
      </div>

      <Nav />
    </header>
  );
};

export default Header;
