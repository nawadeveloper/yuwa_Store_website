import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Cookies from "js-cookie";

const animation = {
  show: { opacity: 1 },
  hide: { opacity: 0, height: 0 },
};

const SignInLink = ({ className }) => {
  const { userInfo } = useContext(UserContext);
  const [showUserOption, setShowUserOption] = useState(false);

  const logout = async (e) => {
    e.preventDefault();

    const conformation = window.confirm("Are you sure you want to logout?");

    if (conformation) {
      Cookies.remove("yuwa_user");
      window.location.reload();
    }
  };

  return (
    <div className={className}>
      {!userInfo.logedIn && (
        <Link
          to={"/signin"}
          className="pr-2 py-1 text-base md:text-xl border-r border-rambow-200 sm:pr-5"
        >
          sign in{" "}
          <span className="material-symbols-rounded align-middle leading-none text-lg md:text-2xl">
            login
          </span>
        </Link>
      )}
      {userInfo.logedIn && (
        <div className="pr-2 py-1 shrink-0 text-base md:text-xl border-r sm:pr-5 relative">
          <span>{userInfo.username}</span>
          {"  "}
          <span
            onClick={() =>
              setShowUserOption((showUserOption) => !showUserOption)
            }
            className="material-symbols-rounded p-2 align-middle leading-none text-lg md:text-2xl cursor-pointer"
          >
            expand_more
          </span>

          <motion.div
            variants={animation}
            animate={showUserOption ? "show" : "hide"}
            className="absolute z-50 bg-rambow-400 text-rambow-100 text-sm font-bold bottom-0 left-0 right-0 translate-y-full rounded-sm p-2 pb-4"
          >
            <button
              onClick={logout}
              className="hover:underline hover:underline-offset-2 p-1 cursor-pointer"
            >
              logout
            </button>

            <br />
            {userInfo.admin && (
              <Link
                className="hover:underline hover:underline-offset-2 p-1 cursor-pointer"
                to="/admin_panel"
              >
                admin panel
              </Link>
            )}
          </motion.div>
        </div>
      )}
      <button className="pl-2 py-1 text-base md:text-xl border-l border-rambow-200 sm:pl-5">
        liked{" "}
        <span className="material-symbols-rounded filled align-middle leading-none text-lg md:text-2xl">
          favorite
        </span>
      </button>
    </div>
  );
};

export default SignInLink;
