import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import { CartContext } from "./contexts/CartContext";
import { useState } from "react";

function App() {
  const initalProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 400,
      imgLink: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      id: 2,
      name: "Product 2",
      price: 300,
      imgLink: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      id: 3,
      name: "Product 3",
      price: 700,
      imgLink: "https://placehold.co/600x400?text=Hello+World",
    },
    {
      id: 4,
      name: "Product 4",
      price: 600,
      imgLink: "https://placehold.co/600x400?text=Hello+World",
    },
  ];
  const [products, setProducts] = useState(initalProducts);

  return (
    <>
      <CartContext.Provider value={{ products, setProducts }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </>
  );
}

export default App;
