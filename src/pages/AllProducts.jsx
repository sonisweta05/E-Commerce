import { useContext, useEffect } from "react";
import MyContext from "../context/myContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const AllProducts = () => {
  const context = useContext(MyContext);
  const products = context.getAllProducts;
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addCart = (product) => {
    dispatch(addToCart({...product,quantityToAdd:1}));
  };
  const removeCart = (product) => {
    dispatch(removeFromCart(product));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="w-10/12 right-10">
      <div className="flex flex-wrap gap-4 flex-[2_2_0%]">
        {products.map((product) => {
          const { id, name, price, imageURL } = product;
          return (
            <div className="p-4" key={id}>
              <div className="w-[250px] h-[450px] border border-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer select-none">
                <img
                  onClick={() => navigate(`/productinfo/${id}`)}
                  className="h-[300px] w-full"
                  src={imageURL}
                />
                <div className="p-3">
                  <h3 className="text-gray-600 text-sm">Sweta&apos;s Shop</h3>
                  <h1 className="text-gray-900 font-semibold mb-2">
                    {name.substring(0, 25)}
                  </h1>
                  <h1 className="text-gray-900 font-semibold mb-2">₹{price}</h1>
                  <div className="flex justify-center">
                    {cartItems.some((cartProduct) => cartProduct.id == id) ? (
                      <Button onClick={() => removeCart(product)}>
                        Remove from Cart
                      </Button>
                    ) : (
                      <Button
                        className="bg-blue-gray-500"
                        onClick={() => addCart(product)}
                      >
                        Add To Cart
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
