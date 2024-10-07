import React from 'react';
import { useCart } from './CartContext';

const CheckoutPage = () => {
  const { state, dispatch } = useCart();

  const handleCheckout = () => {
    alert('Checkout successful!');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className='container col-md-6 p-2'>
      <h2>Checkout</h2>
      {state.cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <h3>Order Summary</h3>
          <ul>
            {state.cartItems.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h4>Total Price: ${state.cartItems.reduce((index, item) => index + item.price * item.quantity, 0)}</h4>
          <button className="btn btn-primary" onClick={handleCheckout}>Complete Purchase</button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
