import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const userDetail = {
    name: "",
    email: "",
    contact_number: "",
  };

  const [data, setData] = useState({ ...userDetail });

  const handleInput = (event) => {
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    console.log(data);
    event.preventDefault();
    // debugger;
    if (data.name === "" || data.email === "" || data.contact_number === "") {
      alert("Please enter detail");
    } else {
      const getData = JSON.parse(localStorage.getItem("userContact") || "[]");
      console.log(getData);
      const array = Array.isArray(getData) ? getData : [getData];
      array.push(data);

      localStorage.setItem("userContact", JSON.stringify(array));
      event.currentTarget.reset();
      setData({ ...userDetail });
    }
  };

  return (
    <div className="contact-main-div">
      <div className="contact-container">
        <h1 className="heading">Contact us</h1>
        <form action="">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInput}
            placeholder="Enter name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInput}
            placeholder="Enter email"
          />

          <label htmlFor="number">Contact number</label>
          <input
            type="number"
            name="contact_number"
            onChange={handleInput}
            placeholder="Enter contact number"
          />

          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
