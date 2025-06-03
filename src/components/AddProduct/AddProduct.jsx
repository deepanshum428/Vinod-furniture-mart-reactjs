import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../crud";
import Swal from "sweetalert2";
import { MyContext } from "../../context";
import "./AddProduct.css";

export function AddProduct() {
  const { loggedInUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!loggedInUser) {
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
      return;
    }

    try {
      // Validate required fields
      if (
        !product.name ||
        !product.price ||
        !product.description ||
        !product.image
      ) {
        Swal.fire({
          title: "Missing Information",
          text: "Please fill in all required fields",
          icon: "error",
        });
        return;
      }

      // Add the new product
      await addProduct({
        ...product,
        price: parseFloat(product.price),
      });

      Swal.fire({
        title: "Success!",
        text: "Product added successfully",
        icon: "success",
      }).then(() => {
        navigate("/");
      });
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to add product",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Add New Product</h1>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price*</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL*</label>
          <input
            type="url"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
          {product.image && (
            <div className="image-preview">
              <img src={product.image} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
