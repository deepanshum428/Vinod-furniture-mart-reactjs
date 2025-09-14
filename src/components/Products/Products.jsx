import React, { useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../../Context/context.ts";
import { getProducts } from "../../Services/crud.ts";
import { saveCartProducts } from "../../Services/cart.ts";

export default function Products() {
  const { cart, setCart, loggedInUser } = useContext(MyContext);
  const navigate = useNavigate();
  const products = getProducts();

  const addToCart = (product) => {
    const alreadyInCart = cart.products.some((item) => item.id === product.id);

    if (alreadyInCart) {
      alert(`${product.name} is already in your cart!`);
      return;
    }

    if (loggedInUser) {
      const updatedCart = [...cart.products, product];
      setCart({ products: updatedCart });
      saveCartProducts({ products: updatedCart }, loggedInUser?.email);

      const button = document.getElementById(`add-btn-${product.id}`);
      if (button) {
        button.textContent = "Added!";
        setTimeout(() => {
          button.textContent = "Already added";
        }, 1000);
      }
    } else {
      Swal.fire({
        title: "Please login first!",
        icon: "warning",
        showConfirmButton: true,
      });
      navigate("/login");
    }
  };

  return (
    <div className="px-4 py-8 bg-[#fffaf5] min-h-screen mt-20">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#8b4729] mb-2">
            Explore Our Collection
          </h1>
          <p className="text-[#a65a32] text-base md:text-lg">
            Choose from a wide range of comfort and elegance
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-[#e3d7cf] rounded-lg shadow-sm bg-white p-4 flex flex-col"
            >
              <div className="h-48 mb-4 overflow-hidden rounded">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <h2 className="text-lg font-semibold text-[#59341c] mb-2">
                {product.name}
              </h2>
              <div className="flex justify-between items-center mt-auto">
                <NavLink
                  to={`/product/${product.id}`}
                  className="text-sm font-semibold text-[#a65a32] hover:underline"
                >
                  View Details
                </NavLink>
                <button
                  id={`add-btn-${product.id}`}
                  className="bg-[#a65a32] hover:bg-[#8b4729] text-white px-4 py-1 text-sm font-semibold rounded hover:scale-105 transition-transform duration-200 outline-none active:scale-95 cursor-pointer"
                  onClick={() => addToCart(product)}
                >
                  {cart.products.some((item) => item.id === product.id)
                    ? "Already added"
                    : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
