import { Link, Outlet } from "react-router-dom";
import yuwa_logo from "../assets/yuwa_logo.png";

const AdminLayout = () => {
  return (
    <>
      <div className="bg-rambow-100 h-16 flex justify-center items-center">
        <Link to="/">
          <img className="w-10 h-10" src={yuwa_logo} alt="logo" />
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
