import { useRef, useState } from "react";
import DropMenuDesktop from "./DropMenuDesktop";
import MENU_DATA from "../data/MENU_DATA";
import DropMenuMobile from "./DropMenuMobile";

const Nav = () => {
  const drop_menu_desktop = useRef();
  const nav = useRef();
  const [mainMenu, setMainMenu] = useState({}); // mainMenu will be MENU_DATA[menu] where menu is a value of nav hover.

  const [menuToggle, setMenuToggle] = useState(false);

  const nav_hover = (e) => {
    const element = drop_menu_desktop.current;

    element.classList.remove("hidden");
    if (e.target.text) setMainMenu(MENU_DATA[e.target.text]);
  };

  const nav_hover_out = (e) => {
    const element = drop_menu_desktop.current;
    const navRef = nav.current;
    const target = e.relatedTarget;

    if (target["Window"] === undefined) {
      if (!element.contains(target) && !navRef.contains(target)) {
        element.classList.add("hidden");
      }
    }
  };

  const mobileMenuToggle = (e) => {
    menuToggle ? setMenuToggle(false) : setMenuToggle(true);
  };

  return (
    <>
      <div className="border-b-2 border-rambow-300 py-2 md:hidden display_size_noPadding relative">
        <span
          onClick={mobileMenuToggle}
          className="material-symbols-rounded border mx-1 px-[2px] border-rambow-400 rounded-sm inline-flex align-middle cursor-pointer"
        >
          menu
        </span>

        {/* nav for mobile */}
        {
          <nav
            className={`mt-1 w-full bg-white z-20 absolute top-full transition-all duration-200 ease-in-out ${
              menuToggle ? "left-1" : "-left-full"
            }`}
          >
            <ul className="w-2/5">
              {MENU_DATA &&
                Object.keys(MENU_DATA).map((menu, i) => (
                  <li
                    key={menu}
                    className="bg-rambow-400 border-b text-rambow-100 border-rambow-200 relative flex justify-between cursor-pointer mobile_menu_hover"
                  >
                    <p className="pl-1 py-2 inline-block  font-bold">{menu}</p>
                    <span className="material-symbols-rounded  py-2 leading-none">
                      arrow_right
                    </span>

                    <DropMenuMobile data={MENU_DATA[menu]} />
                  </li>
                ))}
            </ul>
          </nav>
        }
      </div>

      {/* nav for desktop */}
      <nav
        ref={nav}
        onMouseEnter={nav_hover}
        onMouseLeave={nav_hover_out}
        className="hidden md:flex justify-between display_size border-b-2 border-rambow-300 relative"
      >
        {MENU_DATA &&
          Object.keys(MENU_DATA).map((menu, i) => (
            <a
              key={menu}
              className="flex-1 text-center py-3 px-6 cursor-pointer text-xl"
              href="#"
            >
              {menu}
            </a>
          ))}
      </nav>

      <div
        ref={drop_menu_desktop}
        onMouseLeave={nav_hover_out}
        className="w-full shadow-md z-10 hidden pb-4 text-rambow-400 absolute top-full left-0 remove_from_small_screen bg-white"
      >
        <DropMenuDesktop menu_list={mainMenu} />
      </div>
    </>
  );
};

export default Nav;
