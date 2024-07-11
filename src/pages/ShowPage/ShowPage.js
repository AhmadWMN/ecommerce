import React, { useEffect, useState } from "react";
import "./ShowPage.css";
import ProductItem from "../../components/ProductItem/ProductItem";
import { clothes } from "../../data";
import { useParams } from "react-router-dom";

const ShowPage = () => {
  const [filteredClothes, setFilteredClothes] = useState([]);
  const { id, query } = useParams();
  let buffer = [];

  const filter = () => {
    if (id) {
      const parsedId = parseInt(id);
      buffer = clothes.filter((item) => item.id === parsedId);
    } else if (query) {
      buffer = clothes.filter((item) => {
        const name = item.name;
        if (name.includes(query)) {
          return item;
        }
      });
    }
    setFilteredClothes(buffer);
  };

  useEffect(() => {
    filter();
  }, [filteredClothes]);

  return (
    <div className="show-container">
      {filteredClothes == 0 ? (
        <div className="message-container">
          <p>There is No results</p>
        </div>
      ) : (
        <div className="grid-container">
          {filteredClothes.map((item, index) => (
            <ProductItem key={index} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowPage;
