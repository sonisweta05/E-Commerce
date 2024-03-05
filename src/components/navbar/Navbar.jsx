import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";

const Navbar = () => {

  const displayName = useSelector((state)=> state.user)
  console.log(displayName);
  const navLink = (
    <ul className="flex gap-2 text-sm md:text-lg md:gap-4 p-2">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link className=" text-nowrap" to="/allProducts">All Products</Link>
      </li>
      <li>
        <Link to="/userdashboard">User</Link>
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
        <div>
          <div></div>
          
          <img className="w-10 h-10" src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"/>
        <p>{displayName}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
