import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home-main-div">
      <div className="container">
        <h1 className="home-heading">This is home</h1>
        <div className="shop-section">
          <div className="box1 box">
            <div className="box-content">
              <h2>Wooden bed</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/bed.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box2 box">
            <div className="box-content">
              <h2>computer Table</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/computerTable.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box3 box">
            <div className="box-content">
              <h2>Dining Table</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/diningTable.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box4 box">
            <div className="box-content">
              <h2>Dressing table</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/dressing table.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box5 box">
            <div className="box-content">
              <h2>Centre Table</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/simpleCentreTable.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box6 box">
            <div className="box-content">
              <h2>Sofa Set</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/SofaSet.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box7 box">
            <div className="box-content">
              <h2>Chair</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/woodenChair.jpg"}
                  alt="image"
                />
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
                {/* <p>See more</p> */}
              </div>
            </div>
          </div>
          <div className="box8 box">
            <div className="box-content">
              <h2>Door</h2>
              <div className="box-img">
                <img
                  className="productImg"
                  src={"./src/assets/woodenDoor.jpg"}
                  alt="image"
                />
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
                {/* <p className="seeMore">See more</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
