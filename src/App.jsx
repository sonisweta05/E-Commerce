import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import AllProducts from "./pages/AllProducts";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Login from "./Login";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allProducts" element={<AllProducts />} />
          <Route path="/user" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
