import { MyContext } from "../context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { saveCartProducts } from "../cart";

const Cart = () => {
  const { cart, setCart, loggedInUser } = useContext(MyContext);

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;
    setCart((cart) => {
      const products = [...cart.products];
      products[index] = { ...products[index], quantity: newQuantity };
      saveCartProducts({ products }, loggedInUser?.email);
      return { products };
    });
  };

  const removeFromCart = (index) => {
    Swal.fire({
      title: "Remove item?",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setCart((cart) => {
          const products = [...cart.products];
          products.splice(index, 1);
          saveCartProducts({ products }, loggedInUser?.email);
          return { products };
        });
        Swal.fire(
          "Removed!",
          "The item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const calculateTotal = () => {
    return cart.products.reduce(
      (total, product) =>
        total + (product.price || 0) * (product.quantity || 0),
      0
    );
  };

  return (
    <div className="mt-24 px-4 py-10 bg-[#fffaf5] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b4729] mb-2">
            Your Shopping Cart
          </h1>
          <p className="text-[#a65a32] text-lg">
            {cart.products.length}{" "}
            {cart.products.length === 1 ? "item" : "items"} in your cart
          </p>
        </header>

        {cart.products.length === 0 ? (
          <div className="text-center text-[#59341c] mt-10">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <NavLink
              to="/products"
              className="inline-block bg-[#a65a32] hover:bg-[#8b4729] text-white px-6 py-2 rounded text-sm font-medium transition"
            >
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Products List */}
            <div className="md:col-span-2 space-y-6">
              {cart.products.map((product, index) => (
                <div
                  key={`${index}-${product.id}`}
                  className="flex flex-col md:flex-row items-center gap-6 border p-4 rounded-lg bg-white shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-32 h-32 object-cover rounded-md"
                  />
                  <div className="flex-1 text-left">
                    <h2 className="text-lg font-semibold text-[#59341c]">
                      {product.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      {product.description}
                    </p>
                    <p className="text-[#8b4729] font-semibold mt-2">
                      ₹{product.price.toFixed(2)}
                    </p>

                    <div className="flex items-center mt-3 space-x-2">
                      <button
                        className="w-8 h-8 bg-[#e3d7cf] hover:bg-[#d6c4b8] text-[#59341c] rounded cursor-pointer transition-transform duration-200 hover:scale-102 active:scale-98"
                        onClick={() =>
                          updateQuantity(index, product.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="px-3">{product.quantity}</span>
                      <button
                        className="w-8 h-8 bg-[#e3d7cf] hover:bg-[#d6c4b8] text-[#59341c] rounded cursor-pointer transition-transform duration-200 hover:scale-102 active:scale-98"
                        onClick={() =>
                          updateQuantity(index, product.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <p className="mt-2 text-sm text-gray-700">
                      Total: ₹{(product.price * product.quantity).toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4 mt-4">
                      <NavLink
                        to={`/product/${product.id}`}
                        className="text-[#a65a32] text-sm hover:underline font-semibold"
                      >
                        View Details
                      </NavLink>
                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-sm text-red-600 hover:underline font-semibold cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#8b4729] mb-4">
                Order Summary
              </h3>
              <div className="flex justify-between py-2 border-b">
                <span>
                  Subtotal (
                  {cart.products.reduce(
                    (acum, item) => acum + item.quantity,
                    0
                  )}{" "}
                  items)
                </span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 border-b">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between py-2 font-semibold">
                <span>Total</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
              <NavLink to="payment">
                <button className="mt-6 w-full bg-[#a65a32] hover:bg-[#8b4729] text-white py-2 rounded font-medium transition-transform duration-200 hover:scale-105 active:scale-95 outline-none cursor-pointer">
                  Proceed To Checkout
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
