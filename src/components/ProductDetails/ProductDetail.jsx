import React, { useContext } from "react";
import { MyContext } from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../crud";
import { saveCartProducts } from "../../cart";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart, loggedInUser } = useContext(MyContext);

  const products = getProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center text-gray-600 py-20">Product not found.</div>
    );
  }

  const isInCart = cart.products.some((item) => item.id === product.id);

  const addToCart = () => {
    if (isInCart) {
      Swal.fire({
        icon: "info",
        title: "Already in Cart",
        text: `${product.name} is already in your cart`,
      });
    }

    if (loggedInUser) {
      setCart((prevCart) => {
        const updatedProducts = [...prevCart.products, product];
        saveCartProducts({ products: updatedProducts }, loggedInUser?.email);
        return { products: updatedProducts };
      });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${product.name} added to cart!`,
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        title: "Please login first!",
        showClass: {
          popup: `animate__animated animate__fadeInUp animate__faster`,
        },
        hideClass: {
          popup: `animate__animated animate__fadeOutDown animate__faster`,
        },
      });
      navigate("/login");
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className=" w-full md:w-1/2 flex justify-center items-center object-cover">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm object-cover rounded-xl shadow"
            style={{ width: "70%", aspectRatio: "6/6" }}
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-[#a65a32] text-xl font-semibold">
            ₹ {product.price.toFixed(2)}
          </p>
          <p className="text-gray-600">{product.description}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {isInCart ? (
              <button
                onClick={() => navigate("/cart")}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium transition-transform duration-200 outline-none hover:scale-102 active:scale-98"
              >
                View Product In Cart
              </button>
            ) : (
              <button
                onClick={addToCart}
                className="w-full sm:w-auto bg-[#a65a32] hover:bg-[#8a4b2b] text-white px-5 py-2 rounded-md font-medium transition-transform duration-200 outline-none hover:scale-102 active:scale-98"
              >
                Add To Cart
              </button>
            )}

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:bg-gray-200 px-5 py-2 rounded-md font-medium transition-transform duration-200 outline-none hover:scale-102 active:scale-98"
            >
              Back To Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
