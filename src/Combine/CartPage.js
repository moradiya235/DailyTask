import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();
  const { cartItems, totalQuantity } = state;

  const removeFromCart = (id, quantity) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, quantity } });
  };

  const updateQuantity = (id, quantity, change) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity, change } });
  };

  return (
    <div className='container col-md-6 p-2'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <p>{item.name} - ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="btn btn-warning" onClick={() => removeFromCart(item.id, item.quantity)}>Remove</button>
              <button className="btn btn-success" onClick={() => updateQuantity(item.id, item.quantity + 1, 1)}>+</button>
              <button className="btn btn-danger" onClick={() => updateQuantity(item.id, item.quantity - 1, -1)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Items: {totalQuantity}</h3>
    </div>
  );
};

export default CartPage;
