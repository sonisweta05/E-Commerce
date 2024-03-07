import { Navigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const ProtectedRouteForUser = ({children}) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if(user !== "abc@gmail.com"){
    return children
  }else{
    return <Navigate to={'/login'}/>
}
}
export default ProtectedRouteForUser
