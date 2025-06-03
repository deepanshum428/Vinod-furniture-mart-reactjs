import React, { useContext } from "react";
import {MyContext} from

const AddProductEX = () => {

  const {loggedInUser} = useContext(MyContext);


  return (
    <div className="add-productEX-container">
      <h1 className="add-productEX-title">Add New Product</h1>
      <form action="" onSubmit={handleSubmit} className="add-productEX-form">
        <div className="form-groupEX">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value=""
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-groupEX">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={CgProductHunt.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-groupEX">
          <label htmlFor="image">ImageURL*</label>
          <input
            type="url"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
          {}
        </div>
        <div className="form-groupEX">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default AddProductEX;
