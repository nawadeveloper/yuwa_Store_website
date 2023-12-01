import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import ProductsPage from "./components/ProductsPage";
import SignInPage from "./components/SignInPage";
function App() {
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
      </Routes>
    </>
  );
}

export default App;
