import React, { useState } from "react";
import "./Signup.css";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState({ ...userDetail });
  const navigate = useNavigate();

  const handleInput = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name == "" || data.email == "" || data.password == "") {
      alert("please enter detail");
    } else {
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      console.log(getData);

      const arr = Array.isArray(getData) ? getData : [getData];
      arr.push(data);

      localStorage.setItem("user", JSON.stringify(arr));
      event.currentTarget.reset();
      setData({ ...userDetail });
      alert("signup successfully");
      // navigate("/login");
    }
  };

  return (
    <div className="main-Signup">
      <div className="signup-container">
        <div className="signup-left-content">
          <h1 className="signup-left-h1">Signup page</h1>
          <p>Start your journey with us</p>
        </div>
        <form action="" className="signup-form" onSubmit={handleSubmit}>
          <div className="signup-right-content">
            <h1 className="signup-right-h1">Signup</h1>
            <div className="signup-input-group-right">
              {/* <div className="signup-input-group-right"> */}

              <label htmlFor="Full Name">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                onChange={handleInput}
              />

              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleInput}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleInput}
              />
              <div className="signup-already-login">
                <p>Already have an account ? </p>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-blue-800"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Login
                </NavLink>
              </div>
              <button type="submit" className="signup-button">
                Signup
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
