import InputWithIcon from "./InputWithIcon";
import RegisterUser from "./RegisterUser";
import SignInCover from "./SignInCover";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const SignInPage = () => {
  const { userInfo } = useContext(UserContext);

  if (userInfo.logedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-screen h-screen overflow-hidden flex items-center bg-rambow-100">
      <div className="display_size_noPadding min-h-[300px] flex flex-1 rounded-lg overflow-hidden bg-rambow-400 relative">
        <SignInCover />

        <div className="flex-1 flex justify-center items-center">
          <div className="p-14 flex-1">
            <h2 className="font-bold mb-8 text-white text-3xl text-center">
              Login
            </h2>
            <form className="flex flex-col gap-4">
              <InputWithIcon
                id="loginUsername"
                icon="person"
                input_type="text"
                placeholder="username"
              />
              <InputWithIcon
                id="loginPassword"
                icon="lock"
                input_type="password"
                placeholder="password"
              />
              <button className="bg-rambow-300 py-1 px-20 rounded-full text-white font-bold mx-auto">
                login
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 bg-rambow-300 rounded-l-3xl flex items-center">
          <div className="flex-1 p-14">
            <h2 className="font-bold mb-8 text-white text-3xl text-center">
              Register
            </h2>
            <RegisterUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
