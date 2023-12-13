import Login from "./Login";
import RegisterUser from "./RegisterUser";
import SignInCover from "./SignInCover";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  if (userInfo.logedIn) {
    return <Navigate to="/" />;
  }

  const googleLogin = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center bg-rambow-100">
      <div className="display_size_noPadding min-h-[300px] flex flex-1 rounded-lg overflow-hidden bg-rambow-400 relative">
        <SignInCover />

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="w-full p-14 flex-1">
            <h2 className="font-bold mb-8 text-white text-3xl text-center">
              Login
            </h2>
            <Login user={{ userInfo, setUserInfo }} />
          </div>
          <span className="text-rambow-100 mb-4"> or sign in with </span>
          <button
            onClick={googleLogin}
            className="text-white px-4 py-2 border border-rambow-300 rounded-md flex-1 mb-10"
          >
            google
          </button>
        </div>

        <div className="flex-1 bg-rambow-300 rounded-l-3xl flex items-center">
          <div className="flex-1 p-14">
            <h2 className="font-bold mb-8 text-white text-3xl text-center">
              Register
            </h2>
            <RegisterUser user={{ userInfo, setUserInfo }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
