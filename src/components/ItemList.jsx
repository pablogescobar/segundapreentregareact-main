
import React, { useState, useEffect } from "react";
import { Cart } from "./Cart";
import { Img } from "@chakra-ui/react";

export const ItemList = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/data/products.json");
        const data = await response.json();
        setStoreItems(data);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Cart key={product.id } {...product} />;
      })}
    </div>
  );
};
