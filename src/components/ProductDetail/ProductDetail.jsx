// src/pages/ProductDetail/ProductDetail.tsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../crud";
import { saveCardProducts } from "../../cart";
import { MyContext } from "../../context";
import Swal from "sweetalert2";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useContext(MyContext);
  const userLogin = localStorage.getItem("user");

  const products = getProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const addToCart = () => {
    // Check if product already exists in cart
    const isInCart = cart.products.some((item) => item.id === product.id);

    if (isInCart) {
      alert(`${product.name} is already in your cart!`);
      return;
    }

    if (userLogin) {
      setCart((prevCart) => {
        const updatedProducts = [...prevCart.products, product];
        saveCardProducts({ products: updatedProducts });
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
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate("/login");
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <div className="product-detail-image-container">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-actions">
            <button onClick={addToCart} className="product-detail-add-to-cart">
              Add to Cart
            </button>
            <button
              onClick={() => navigate(-1)}
              className="product-detail-back"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
