import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import { CartContext } from "./contexts/CartContext";
import { useState } from "react";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
