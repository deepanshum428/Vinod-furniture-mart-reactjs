import React, { useContext } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { CartContext, saveCardProducts } from "../../cart";
import Swal from "sweetalert2";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

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
          saveCardProducts({ products });
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
      (total, product) => total + (product.price || 0),
      0
    );
  };

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <p className="cart-subtitle">
          {cart.products.length} items in your cart
        </p>
      </header>

      {cart.products.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <NavLink to="/" className="continue-shopping">
            Continue Shopping
          </NavLink>
        </div>
      ) : (
        <div className="cart-items">
          {cart.products.map((product, index) => (
            <div key={`${index}-${product.id}`} className="cart-item">
              <div className="item-image-container">
                <img
                  className="item-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="item-details">
                <h2 className="item-name">{product.name}</h2>
                {product.price && (
                  <p className="item-price">${product.price.toFixed(2)}</p>
                )}
                <div className="item-actions">
                  <NavLink
                    to={`/product/${product.id}`}
                    className="details-link"
                  >
                    View Details
                  </NavLink>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
