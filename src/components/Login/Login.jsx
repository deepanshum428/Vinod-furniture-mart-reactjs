import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();
  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if ("email" == name) {
      setEmail(value);
    }
    if ("password" == name) {
      setPassword(value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == "" && password == "") {
      alert("Please Enter Detail !");
    } else {
      let getDetail = JSON.parse(localStorage.getItem("user"));
      console.log(getDetail);
      getDetail.map((curValue) => {
        console.log(curValue.password);
        let storeEmail = curValue.email;
        let storePassword = curValue.password;

        if (storeEmail == email && storePassword == password) {
          alert("Login successfully");
          navigate("/home");
        } else {
          return setMsg("Invalid email or password");
        }
      });
    }
  };
  return (
    <div className="main-login">
      <p>{msg}</p>
      <div className="login-container">
        <div className="login-left-content">
          <h1 className="login-left-h1">Login page</h1>
          <p>Start your journey with us</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit} action="">
          <div className="login-right-content">
            <h1 className="login-right-h1">Login</h1>
            <div className="login-input-group-right">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your username"
                onChange={handleInput}
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleInput}
              />
              <div className="login-signup-first">
                <p>If you don't have an account </p>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${
                      isActive ? "text-orange-700" : "text-blue-800"
                    } lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Signup
                </NavLink>
              </div>
              <button className="login-button ">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
