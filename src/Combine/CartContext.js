import React, { createContext, useReducer, useContext } from 'react';


const initialState = {
  cartItems: [],
  totalQuantity: 0,
};


const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalQuantity: state.totalQuantity + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
          totalQuantity: state.totalQuantity + 1,
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        totalQuantity: state.totalQuantity - action.payload.quantity,
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        totalQuantity: state.totalQuantity + action.payload.change,
      };

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
