import { useRef } from "react";
import InputWithIcon from "./InputWithIcon";

const Login = ({ user }) => {
  const username = useRef(null);
  const password = useRef(null);

  //
  const fun_login = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });

    const message = await response.json();

    if (response.ok) {
      user?.setUserInfo({ ...user?.userInfo, logedIn: true });
    } else {
      window.alert(message.message);
    }
  };

  return (
    <form className="flex flex-col gap-4">
      <InputWithIcon
        id="loginUsername"
        icon="person"
        input_type="text"
        placeholder="username"
        inputRef={username}
      />
      <InputWithIcon
        id="loginPassword"
        icon="lock"
        input_type="password"
        placeholder="password"
        inputRef={password}
      />
      <button
        onClick={fun_login}
        className="bg-rambow-300 py-1 px-20 rounded-full text-white font-bold mx-auto"
      >
        login
      </button>
    </form>
  );
};

export default Login;
