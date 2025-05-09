import React, { useContext } from "react";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../cart";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-main-div">
      <div className="container">
        <h1 className="cart-heading">This is cart page</h1>
        <div className="shop-section">
          {cart.products.map((product, index) => (
            <div key={`${index}-${product.id}`} className="box">
              <div className="box-content">
                <h2>{product.name}</h2>
                <div className="box-img">
                  <img className="productImg" src={product.image} alt="image" />
                  <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                        isActive ? "text-orange-700" : "text-blue-800"
                      } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    See More
                  </NavLink>
                  <button
                    className="bg-red-500"
                    onClick={() => {
                      setCart((cart) => {
                        const products = [...cart.products];
                        // remove single product from products
                        //

                        return { products };
                      });
                    }}
                  >
                    Remove
                  </button>
                  {/* <p>See more</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
