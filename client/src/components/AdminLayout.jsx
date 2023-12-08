import { Outlet } from "react-router-dom";
import yuwa_logo from "../assets/yuwa_logo.png";

const AdminLayout = () => {
  return (
    <>
      <div className="bg-rambow-100 h-16 flex justify-center items-center">
        <img className="w-10 h-10" src={yuwa_logo} alt="logo" />
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
