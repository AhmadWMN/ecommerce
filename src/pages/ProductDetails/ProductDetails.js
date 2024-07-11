// src/components/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import { clothes } from "../../data";
import "./ProductDetails.css"; // Import the CSS file

const ProductDetails = () => {
  const { id } = useParams();
  const product = clothes.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <div className="details-section">
        <h2>Details</h2>
        <p>Category: {product.subCategory}</p>
        <p>Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
