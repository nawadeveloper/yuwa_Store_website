import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

const animation = {
  show: { opacity: 1, height: "100%" },
  hide: { opacity: 0, height: 0 },
};

const SignInLink = ({ className }) => {
  const { userInfo } = useContext(UserContext);
  const [showUserOption, setShowUserOption] = useState(false);

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
        <div className="pr-2 py-1 text-base md:text-xl border-r border-rambow-200 sm:pr-5 relative">
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
            className="absolute inline-block z-10 bg-rambow-400 text-rambow-100 text-sm font-bold bottom-0 left-0 right-0 translate-y-full rounded-sm p-2"
          >
            <button className="hover:underline hover:underline-offset-2 inline-block p-1 cursor-pointer">
              logout
            </button>
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
