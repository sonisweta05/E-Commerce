import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AllProducts from "./pages/AllProducts";
import UserDashboard from "./pages/UserDashboard";
import Cart from "./pages/Cart";
import Login from "./registration/Login";
import Layout from "./components/layout/Layout";
import ProductInfo from "./pages/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import MyState from "./context/myState"

const App = () => {
  return (
    <MyState>
      <Router>
        <ScrollTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/allProducts" element={<AllProducts />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NoPage />} />
          </Routes>
        </Layout>
      </Router>
    </MyState>
  );
};

export default App;
