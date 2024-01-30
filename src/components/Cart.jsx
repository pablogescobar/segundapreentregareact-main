import React, { useContext } from "react";
import { CartContext } from "../contexts/ItemDetailContainer";

export const Cart = ({ name, price, id, imgUrl }) => {
  const [cart, setCart] = useContext(CartContext);

  const agregar = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item-box">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      <div>{name}</div>
      <img src={imgUrl} width="175" height="105" />
      <div className="item-price">${price}</div>

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => agregar()}>
          + agregar
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => agregar()}>
          + agregar
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
         - Restar
        </button>
      )}
    </div>
  );
};