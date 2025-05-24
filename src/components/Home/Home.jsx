import React, { useContext } from "react";
import "./Home.css";
import { useNavigate, NavLink } from "react-router-dom";
import { saveCardProducts } from "../../cart";
import { getProducts } from "../../crud";
import Swal from "sweetalert2";
import { MyContext } from "../../context";

function Home() {
  const { cart, setCart, loggedInUser } = useContext(MyContext);
  const products = getProducts();
  const navigate = useNavigate();

  const addToCart = (product) => {
    // Check if product already exists in cart
    const isInCart = cart.products.some((item) => item.id === product.id);

    if (isInCart) {
      alert(`${product.name} is already in your cart!`);
      return;
    }
    if (loggedInUser) {
      setCart((prevCart) => {
        const updatedProducts = [...prevCart.products, product];
        saveCardProducts({ products: updatedProducts }, loggedInUser?.email);
        return { products: updatedProducts };
      });

      const addButton = document.getElementById(`add-btn-${product.id}`);
      if (addButton) {
        addButton.textContent = "Added!";
        setTimeout(() => {
          addButton.textContent = "Add";
        }, 1000);
      }
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

    // Provide visual feedback
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Our Store</h1>
        <p className="home-subtitle">Discover our amazing products</p>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
            </div>
            <div className="product-info">
              <h2 className="product-name">{product.name}</h2>
              <div className="product-actions">
                <NavLink
                  to={`/product/${product.id}`} // Assuming you have a product detail page
                  className="details-link"
                >
                  View Details
                </NavLink>
                <button
                  id={`add-btn-${product.id}`}
                  className="add-to-cart-btn"
                  onClick={() => addToCart(product)}
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
