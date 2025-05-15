import { createContext, useContext } from "react";

export const CartContext = createContext();

const useCart = () => useContext(CartContext);
export default useCart;
