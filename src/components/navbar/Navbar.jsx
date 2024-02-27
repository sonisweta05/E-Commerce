import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const navLink = (
    <ul className="flex gap-4">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allProducts">All Products</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
  return (
    <nav>
      <div className="flex justify-between items-center px-2 bg-blue-gray-500 text-white h-[64px]">
        <div>
          <Link to="/">
            <div> Sweta&apos;s Shop</div>
          </Link>
        </div>
        <div className="">{navLink}</div>
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
