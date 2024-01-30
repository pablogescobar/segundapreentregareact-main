import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ItemDetailContainer";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [showDetail, setShowDetail] = useState(false);
  const [showTotal, setShowTotal] = useState(false);

  const quantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  // Componente adicional para mostrar el detalle
  const DetailDisplay = ({ cart, onClose }) => {
    return (
      <div>
        <h3>Detalle de productos:</h3>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <strong>ID:</strong> {item.id}
              <br />
              <strong>Nombre:</strong> {item.name}
              <br />
              <strong>Precio:</strong> ${item.price}
              <br />
              <strong>Imagen:</strong>{" "}
              <img
                src={item.imgUrl}
                alt={item.name}
                width="50"
                style={{ marginLeft: "10px" }}
              />
              <br />
              <strong>Cantidad:</strong> {item.quantity}
              <hr />
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Cerrar Detalle</button>
      </div>
    );
  };

  return (
    <div className="cart-container">
      <div>
        {/* Cambio de "Items in cart" a "Total de productos" */}
        <div>Total de productos: {quantity}</div>
        
{cart.length > 0 && cart[0] && (
  <img
    src={cart[0].imgUrl}
    alt={cart[0].name}
    width="50"
    style={{ marginLeft: "10px" }}
  />
)}



        <button onClick={() => setShowDetail(!showDetail)}>
          {showDetail ? "Detalle de la Compra" : "Ver el detalle "}
        </button>

        {/* Mostrar el detalle condicionalmente */}
        {showDetail && cart.length > 0 && (
          <DetailDisplay cart={cart} onClose={() => setShowDetail(false)} />
        )}

        <button onClick={() => setShowTotal(true)}>Finalizar la Compra</button>

        {/* Mostrar el total al costado */}
        {showTotal && (
          <div style={{ marginTop: "25px", fontSize: "50px", color: "green" }}>
            Total a pagar: ${totalPrice}
          </div>
        )}
      </div>
    </div>
  );
};
