import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const SignInLink = ({ className }) => {
  const { userInfo } = useContext(UserContext);

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
        <span className="pr-2 py-1 text-base md:text-xl border-r border-rambow-200 sm:pr-5 align-middle leading-none">
          {userInfo.username}
        </span>
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
