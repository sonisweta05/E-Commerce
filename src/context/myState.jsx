/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { fireDB } from "../firebase/FIreBaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
const MyState = ({ children }) => {
  // const [loading, setLoading] = useState(false);
  const [getAllProducts, setGetAllProducts] = useState([]);

  const getAllProductsFunction = async () => {
    // setLoading(true);
    try {
      const q = collection(fireDB, "products");
      onSnapshot(q, (QuerySnapshot) => {
        const productArray = [];
        QuerySnapshot.docs.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProducts(productArray);
        // setLoading(false)
      });
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };
  useEffect(() => {
    getAllProductsFunction();
  }, []);

  return (
    <MyContext.Provider value={{ getAllProducts }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyState;
