// src/components/ProductItem.js
import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.css";

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/productdetails/${product.id}`}>View Details *</Link>
    </div>
  );
};

export default ProductItem;
