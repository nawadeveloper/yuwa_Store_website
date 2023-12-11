import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import ProductsPage from "./components/ProductsPage";
import SignInPage from "./components/SignInPage";
import Cookies from "js-cookie";
import { useEffect, useContext } from "react";
import { UserContext } from "./components/UserContext";
import AddProduct from "./components/AddProduct";
import AdminLayout from "./components/AdminLayout";
import AdminPanel from "./components/AdminPanel";
import AdminProductList from "./components/AdminProductList";

async function check_login(setUserInfo) {
  const response = await fetch("http://localhost:4000/auth/check_login", {
    method: "GET",
    credentials: "include",
  });

  response.json().then((result) => {
    if (result.logedIn) {
      setUserInfo(result);
    }
  });
}

function App() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const token = Cookies.get("yuwa_user");

    if (token) {
      check_login(setUserInfo);
    } else {
      setUserInfo({
        username: "",
        userId: "",
        likedProducts: [],
        logedIn: false,
        admin: false,
      });
    }
  }, [userInfo.logedIn]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />

          <Route
            path="*"
            element={
              <h2 className="display_size text-2xl font-bold h-60 py-5">
                Couldn't find a page.
              </h2>
            }
          />
        </Route>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/admin_panel" element={<AdminLayout />}>
          <Route index element={<AdminPanel />} />
          <Route path="add_item" element={<AddProduct />} />
          <Route path="admin_product_list" element={<AdminProductList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
