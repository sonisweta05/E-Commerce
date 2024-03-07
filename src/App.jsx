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
import MyState from "./context/myState";
import ProtectedRouteForUser from "./protectedRoute/ProtectedRouteForUser";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRouteForAdmin from "./protectedRoute/ProtectedRouteForAdmin";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";

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
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NoPage />} />
            <Route
              path="/userdashboard"
              element={
                <ProtectedRouteForUser>
                  <UserDashboard />
                </ProtectedRouteForUser>
              }
            />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRouteForAdmin>
                  <AdminDashboard />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/addproduct"
              element={
                <ProtectedRouteForAdmin>
                  <AddProductPage />
                </ProtectedRouteForAdmin>
              }
            />
            <Route
              path="/updateproduct/:id"
              element={
                <ProtectedRouteForAdmin>
                  <UpdateProductPage />
                </ProtectedRouteForAdmin>
              }
            />
             <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
            <ProtectedRouteForAdmin>
              <UpdateProductPage />
            </ProtectedRouteForAdmin>
          } />
          </Routes>
        </Layout>
      </Router>
    </MyState>
  );
};

export default App;
