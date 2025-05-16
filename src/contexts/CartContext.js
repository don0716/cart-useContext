import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const useCart = () => useContext(CartContext);
export default useCart;

export const initalProducts = [
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

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(initalProducts);
  const [cartItems, setCartItems] = useState([]);
  console.log("cartITems", cartItems);

  const handleAddToCart = (product) => {
    setCartItems((prevState) => {
      const existingItem = prevState.find(
        (item) => item.product.id === product.id
      );

      if (existingItem) {
        return prevState.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevState, { product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (prodId) => {
    setCartItems(cartItems.filter((prod) => prod.product.id !== prodId));
  };

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        handleAddToCart,
        cartItems,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
