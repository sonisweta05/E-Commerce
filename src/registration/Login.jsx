import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/FIreBaseConfig";
import { checkValidData } from "./validate";
import { addUser, } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(
      // name.current?.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Sign in");
          // eslint-disable-next-line no-unused-vars
          const user = userCredential.user;
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="h-screen w-full flex justify-center items-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-xl shadow-md p-10 bg-blue-gray-200 my-36 mx-auto right-0 left-0 text-black bg-opacity-80"
        >
          <h1 className="text-center text-sm md:text-xl font-bold py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="placeholder-black placeholder-opacity-60 rounded-lg shadow-md p-2 my-2 w-full bg-blue-gray-200"
            ></input>
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="placeholder-black placeholder-opacity-60 focus:border-gray focus:outline-none focus:ring-1 rounded-lg shadow-md p-2 my-2 w-full bg-blue-gray-200"
          ></input>
          <input
            ref={password}
            type="text"
            placeholder="Password"
            className="placeholder-black placeholder-opacity-60 focus:border-gray focus:outline-none focus:ring-1 rounded-lg shadow-md p-2 my-2 w-full  bg-blue-gray-200"
          ></input>
          <p className="text-red-500 font-bold text p-2 m-2">{errorMessage}</p>
          <button
            className="p-2 my-2 bg-pink-600 text-white font-bold w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="m-2 p-2 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Sweta's Shop? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import { Button } from "@material-tailwind/react";

// const Login = () => {
//   return (
//     <div className="h-screen w-full flex justify-center items-center">
//       <div className="m-1 p-4 w-[400px] h-[300px] rounded-xl shadow-lg bg-blue-gray-300 border border-blue-gray-600 overflow-hidden ">
//         <h1 className="text-center text-sm md:text-xl font-bold ">Login</h1>
//         <div className="flex flex-col">
//           <input className="my-3 border border-blue-gray-600 p-2 rounded-lg shadow-md" placeholder="Email Address" />
//           <input className="border mb-4 border-blue-gray-600 p-2 rounded-lg shadow-md" placeholder="Password" />
//           <Button className="mb-5">Login</Button>
//         </div>

//         <p>Don&apos;t Have an account? Signup</p>
//       </div>
//     </div>
//   );
// };

// export default Login;
