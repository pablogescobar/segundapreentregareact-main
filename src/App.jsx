import React from "react";
import { ItemList } from "./components/ItemList";
import { Navbar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { ItemDetailContainer } from "./contexts/ItemDetailContainer";

export const App = () => {
  return (
    <ItemDetailContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ItemDetailContainer>
  );
};