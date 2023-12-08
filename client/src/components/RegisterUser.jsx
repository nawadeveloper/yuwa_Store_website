import { useRef } from "react";
import InputWithIcon from "./InputWithIcon";

const RegisterUser = ({ user }) => {
  const username = useRef();
  const password = useRef();

  const registerUser = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: username?.current.value,
        password: password?.current.value,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const message = await response.json();
    window.alert(message.message);

    if (message.register) {
      user?.setUserInfo({ ...user?.userInfo, logedIn: true });
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={registerUser}>
      <InputWithIcon
        id="registerUsername"
        icon="person"
        input_type="text"
        placeholder="username"
        inputRef={username}
      />
      <InputWithIcon
        id="registerPassword"
        icon="lock"
        input_type="password"
        placeholder="password"
        inputRef={password}
      />

      <button className="bg-rambow-400 py-1 px-20 rounded-full text-white font-bold mx-auto">
        Register
      </button>
    </form>
  );
};

export default RegisterUser;
