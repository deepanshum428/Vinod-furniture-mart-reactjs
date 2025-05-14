import React, { useContext } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { CartContext, saveCardProducts } from "../../cart";
import { getProducts } from "../../crud";

function Home() {
  const { setCart } = useContext(CartContext);

  const products = getProducts();

  return (
    <div className="home-main-div">
      <div className="container">
        <h1 className="home-heading">This is home</h1>
        <div className="shop-section">
          {products.map((product) => (
            <div key={product.id} className="box">
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
                    className="bg-green-500 hover:cursor-pointer"
                    onClick={() =>
                      setCart((cart) => {
                        const products = [...cart.products];
                        products.push(product);
                        saveCardProducts({ products });
                        return { products };
                      })
                    }
                  >
                    Add
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

export default Home;
