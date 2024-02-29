import { Button } from "@material-tailwind/react";
import { Trash } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹9999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

const Cart = () => {
  return (
    <div className="px-16 py-8">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16 lg:items-start">
        <section
          aria-labelledby="cart-heading"
          className="bg-white rounded-lg lg:col-span-8  "
        >
          <div className="divide-y divide-gray-200">
            {products.map((product) => {
              const {
                id,
                imageSrc,
                name,
                size,
                price,
                discount,
                originalPrice,
                color,
              } = product;
              return (
                <div key={id} className="py-4 flex justify-between">
                  <div>
                    <div className="flex ">
                      <div>
                        <img className="w-[100px]" src={imageSrc} />
                      </div>
                      <div className="text-xlg font-semibold pl-8">
                        <h1>{name}</h1>
                        <div className="mt-1 flex text-sm">
                          <p className=" text-gray-500">{color}</p>
                          {size ? (
                            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                              {size}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex gap-2 text-sm pt-2">
                          <h2 className="text-gray-600 text-xs pt-0.5 line-through">{originalPrice}</h2>
                          <h2 className="">{price}</h2>
                          <h2 className="text-gray-600">{discount}</h2>
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-2">
                      <div className="flex">
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center"
                        >
                          -
                        </button>
                        <input
                          className="h-7 w-9 rounded-md text-center text-sm"
                          defaultValue={1}
                        />
                        <button
                          type="button"
                          className="flex h-7 w-7 items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                      <button className="flex pl-4 text-red-500 text-sm items-center">
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
          <p className=" border-b border-gray-200 sm:text-2xl pt-10">Price Details</p>
        <div>
          <dl className="space-y-1 px-2 py-4">
            <div className="flex items-center justify-between ">
              <dt>Price (3 items) </dt>
              <dd>₹ 52398</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt> Discount</dt>
              <dd>-₹ 3431</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt>Delivery Charges</dt>
              <dd>Free</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt>Total Amount</dt>
              <dd>₹ 48967</dd>
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
