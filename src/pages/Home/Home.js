import React, { useEffect } from "react";
import Slider from "../../components/Slider/Slider";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { maincategories } from "../../data";
import "./Home.css";

const Home = () => {
  let categories = maincategories;

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="container">
      <div className="slider">
        <Slider />
      </div>

      <div className="right-container">
        <div className="container-name">
          <p className="name">Noor Shop</p>
        </div>

        <div className="categories-container">
          {categories.map((category, index) => {
            return (
              <CategoryCard
                id={category.id}
                image={category.image}
                title={category.title}
                description={category.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
