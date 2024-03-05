/* eslint-disable react/prop-types */
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="main-content min-h-screen">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
