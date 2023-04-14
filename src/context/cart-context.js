import { createContext, useContext, useReducer } from "react";
import productsData from "../fakeData.json";

const initialValue = { productsData };
function cartReducer(state, action) {
  switch (action.type) {
    case "":
      return { ...state };

    default:
      return state;
  }
}

const CartContext = createContext();
const CartProvider = function ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
