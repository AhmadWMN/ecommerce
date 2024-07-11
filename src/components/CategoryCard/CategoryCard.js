import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ id, image, title, description }) => {
  const navigate = useNavigate();
  return (
    <div
      className="category-card"
      onClick={() => {
        navigate(`/show/category/${id}`);
      }}
    >
      <img src={image} alt={title} className="category-card-image" />
      <div className="category-card-content">
        <h3 className="category-card-title">{title}</h3>
        <p className="category-card-description">{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
