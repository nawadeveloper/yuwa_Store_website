import { useRef, useState } from "react";
import DropMenuDesktop from "./DropMenuDesktop";
import MENU_DATA from "../data/MENU_DATA";

const Nav = () => {
  const drop_menu_desktop = useRef();
  const nav = useRef();
  const [mainMenu, setMainMenu] = useState({});

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

  return (
    <>
      <nav
        ref={nav}
        onMouseEnter={nav_hover}
        onMouseLeave={nav_hover_out}
        className="flex justify-between display_size border-b-2 border-rambow-300 relative"
      >
        {MENU_DATA &&
          Object.keys(MENU_DATA).map((menu, i) => (
            <a
              key={i}
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
        className="w-full shadow-md z-10 hidden pb-4 text-rambow-400 absolute top-full left-0"
      >
        <DropMenuDesktop menu_list={mainMenu} />
      </div>
    </>
  );
};

export default Nav;
