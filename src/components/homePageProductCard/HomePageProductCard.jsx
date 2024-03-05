import { Button } from "@material-tailwind/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
  const context = useContext(myContext)
  const products = context.getAllProducts;
  const cartItems = useSelector((state) => state.cart)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addCart = (product) => {
    dispatch(addToCart({...product, quantityToAdd:1}));
  };
  const removeCart = (product) => {
    dispatch(removeFromCart(product));
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="mt-5">
      <div>
        <h1 className="text-center font-semibold text-lg md:text-2xl">
          Bestselling Products
        </h1>
      </div>
      <section className="">
        <div className="p-1">
          <div className="flex flex-wrap gap-2  justify-center ">
            {products.map((product) => {
              const { id, name, price , imageURL} = product;
              return (
                <div className="p-4 " key={id}>
                  <div className="w-[250px] h-[450px] border border-gray-200 rounded-xl overflow-hidden shadow-md cursor-pointer select-none">
                    <img onClick={() => navigate(`/productinfo/${id}`) } className="h-[300px] w-full" src={imageURL} />
                    <div className="p-3">
                      <h3 className="text-gray-600 text-sm">
                        Sweta&apos;s Shop
                      </h3>
                      <h1 className="text-gray-900 font-semibold mb-2">
                        {name.substring(0, 25)}
                      </h1>
                      <h1 className="text-gray-900 font-semibold mb-2">
                        ₹{price}
                      </h1>
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
      </section>
    </div>
  );
};

export default HomePageProductCard;
