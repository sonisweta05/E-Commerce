import { Button } from "@material-tailwind/react";
import { Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreamentCart,
  increamentCart,
  removeFromCart,
} from "../redux/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalCartQty = cartItems.map(item => item.qunatity).reduce((acc,curr)=> (acc+curr),0)
  const cartPriceBeforeDiscount = cartItems.map(item => item.qunatity*item.price).reduce((acc,curr)=> (acc+curr),0)
  const discount = (cartPriceBeforeDiscount * 10) / 100;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  const increaseProductQty = (product) => {
    dispatch(increamentCart(product));
  };
  const decreaseProductQty = (product) => {
    dispatch(decreamentCart(product));
  };
  const deleteFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="px-16 py-8">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 lg:items-start">
        <section
          aria-labelledby="cart-heading"
          className="bg-white rounded-lg lg:col-span-8  "
        >
          <div className="divide-y divide-gray-200">
            {cartItems.map((product, i) => {
              const { imageURL, name, price } = product;
              return (
                <div key={i} className="py-4 flex justify-between">
                  <div>
                    <div className="flex ">
                      <div>
                        <img className="w-[100px]" src={imageURL} />
                      </div>
                      <div className="text-xs md:text-sm font-semibold pl-8">
                        <h1>{name}</h1>
                        {/* <div className="mt-1 flex text-sm">
                          <p className=" text-gray-500">{color}</p>
                          {size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {size}
                            </p>
                          ) : null}
                        </div> */}
                        <div className="flex gap-2 text-sm pt-2">
                          {/* <h2 className="text-gray-600 text-xs pt-0.5 line-through">{originalPrice}</h2> */}
                          <h2 className="text-xs md:text-sm ">{price}</h2>
                          {/* <h2 className="text-gray-600">{discount}</h2> */}
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex">
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center"
                          onClick={() => {
                            decreaseProductQty(product);
                          }}
                        >
                          -
                        </button>
                        <div
                          className="h-7 w-7 rounded-md flex justify-center items-center text-sm"
                          // value={product.quantityToAdd}
                        >{product.quantityToAdd}</div>
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center"
                          onClick={() => increaseProductQty(product)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="flex pl-4 text-red-500 text-sm items-center"
                        onClick={() => deleteFromCart(product)}
                      >
                        <Trash size={14} />
                        <span className="pl-2">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* section 2 */}
        <section
          aria-labelledby="summary-heading"
          className=" mt-16 round bg-white lg:col-span-4 lg:mt-0 lg-p-0"
        >
          <p className=" border-b border-gray-200 sm:text-2xl pt-10">
            Price Details
          </p>
          <div>
            <dl className="space-y-1 px-2 py-4">
              <div className="flex items-center justify-between ">
                <dt>Price ({totalCartQty} items) </dt>
                <dd>₹ {cartPriceBeforeDiscount}</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt> Discount</dt>
                <dd>-₹ {discount}</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt>Delivery Charges</dt>
                <dd>Free</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt>Total Amount</dt>
                <dd>₹ {cartPriceBeforeDiscount - discount}</dd>
              </div>
            </dl>
            <Button className="w-full mt-4 bg-blue-gray-500">Buy Now</Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Cart;
