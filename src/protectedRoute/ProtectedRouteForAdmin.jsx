import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRouteForAdmin = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.email == "abc@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRouteForAdmin;
