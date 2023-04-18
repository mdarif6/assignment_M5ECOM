import { createContext, useContext, useReducer } from "react";
import productsData from "../fakeData.json";

const initialValue = { productsData, setCategory: [], categories: [] };
function cartReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, setCategory: action.payload };

    case "ADDING_TO_CATEGORY":
      return { ...state, categories: [...state.categories, action.payload] };
    case "REMVOVING_FROM_CATEGORY":
      const categoryAfterRemoveSelection = state.categories.filter(
        (item) => item !== action.payload
      );

      return { ...state, categories: categoryAfterRemoveSelection };
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
