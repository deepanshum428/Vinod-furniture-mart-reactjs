import React, { useContext } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { saveCardProducts } from "../../cart";
import Swal from "sweetalert2";
import { MyContext } from "../../context";

function Cart() {
  const { cart, setCart, loggedInUser } = useContext(MyContext);

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
          saveCardProducts({ products }, loggedInUser?.email);
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

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;

    setCart((cart) => {
      const products = [...cart.products];
      products[index] = { ...products[index], quantity: newQuantity };
      saveCardProducts({ products }, loggedInUser?.email);
      return { products };
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
    <div className="cart-container">
      <header className="cart-header">
        <h1 className="cart-title">Your Shopping Cart</h1>
        <p className="cart-subtitle">
          {cart.products.length} {cart.products.length === 1 ? "item" : "items"}{" "}
          in your cart
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
                <p className="item-description">{product.description}</p>
                <p className="item-price">₹{product.price.toFixed(2)}</p>

                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(index, product.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(index, product.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <p className="item-total">
                  Total: ₹{(product.price * product.quantity).toFixed(2)}
                </p>

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
              <span>
                Subtotal (
                {cart.products.reduce((acc, item) => acc + item.quantity, 0)}{" "}
                items)
              </span>
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
