import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const navLink = (
    <ul className="flex gap-2 text-sm md:text-lg md:gap-4 p-2">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link className=" text-nowrap" to="/allProducts">All Products</Link>
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
      <div className="flex flex-col md:flex-row md:justify-between items-center px-2 py-1 bg-blue-gray-500 text-white md:h-[64px]">
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
