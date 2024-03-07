import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Navbar = () => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));

const onLogout =() => {
  localStorage.clear('user')
  navigate('/login')
}
  const navLink = (
    <ul className="flex gap-2 text-sm md:text-lg md:gap-4 p-2">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link className=" text-nowrap" to="/allProducts">
          All Products
        </Link>
      </li>
      <li>
        {user?.email =="abc@gmail.com" ? <Link to="/admindashboard">Admin</Link> : <Link to="/userdashboard">User</Link>  }
        
      </li>
      <li>
        <Link to="/cart">Cart</Link>
      </li>
      {!user && <li>
        <Link to="/login">Login</Link>
      </li>}
      {user && <li onClick={onLogout}>
        Logout
      </li>}
    </ul>
  );
  return (
    <nav>
      <div className="flex  md:justify-between items-center md:px-2 py-1 bg-blue-gray-500 text-white ">
        <div className="flex justify-between w-full">
        <div className="flex md:flex-row flex-col">
        <div>
          <Link to="/">
            <div> Sweta&apos;s Shop</div>
          </Link>
        </div>       
        <div className="">{navLink}</div>
        <SearchBar />
        </div>
        <div className="">
          {user && (
            <div>
              <img
                className="w-10 h-10"
                src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
              />
              <p className="text-center">{user?.displayName}</p>
            </div>
          )}
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
