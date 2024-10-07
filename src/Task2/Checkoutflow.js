import React, { useReducer, useState } from 'react';


const initialState = {
  shippingInfo: {
    name: '',
    address: '',
    city: '',
  },
  paymentMethod: {
    cardNumber: '',
    expiry: '',
    cvv: '',
  },
  step: 1, 
};


const checkoutReducer = (state, action) => {
  if (action.type === 'UPDATE_SHIPPING') {
    return {
      ...state,
      shippingInfo: {
        ...state.shippingInfo,
        [action.field]: action.value,
      },
    };
  }
  if (action.type === 'UPDATE_PAYMENT') {
    return {
      ...state,
      paymentMethod: {
        ...state.paymentMethod,
        [action.field]: action.value,
      },
    };
  }
  if (action.type === 'NEXT_STEP') {
    return { ...state, step: state.step + 1 };
  }
  if (action.type === 'PREV_STEP') {
    return { ...state, step: state.step - 1 };
  }
  return state;
};

const CheckoutFlow = () => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  
  const confirmOrder = () => {
    alert('Order Confirmed!');
    console.log('Order Details:', state);
  };

  
  return (
    <div>
      <h3>Checkout Flow</h3>
      {state.step === 1 && (
        <div>
          <h5>Shipping Info</h5>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => dispatch({ type: 'UPDATE_SHIPPING', field: 'name', value: e.target.value })}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={(e) => dispatch({ type: 'UPDATE_SHIPPING', field: 'address', value: e.target.value })}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={(e) => dispatch({ type: 'UPDATE_SHIPPING', field: 'city', value: e.target.value })}
          />
          <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h5>Payment Method</h5>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            onChange={(e) => dispatch({ type: 'UPDATE_PAYMENT', field: 'cardNumber', value: e.target.value })}
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry Date"
            onChange={(e) => dispatch({ type: 'UPDATE_PAYMENT', field: 'expiry', value: e.target.value })}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={(e) => dispatch({ type: 'UPDATE_PAYMENT', field: 'cvv', value: e.target.value })}
          />
          <button onClick={() => dispatch({ type: 'NEXT_STEP' })}>Next</button>
          <button onClick={() => dispatch({ type: 'PREV_STEP' })}>Back</button>
        </div>
      )}
      {state.step === 3 && (
        <div>
          <h2>Order Confirmation</h2>
          <p>Name: {state.shippingInfo.name}</p>
          <p>Address: {state.shippingInfo.address}</p>
          <p>City: {state.shippingInfo.city}</p>
          <p>Card Number: {state.paymentMethod.cardNumber}</p>
          <button className='btn btn-danger'onClick={() => dispatch({ type: 'PREV_STEP' })}>Back</button>
          <button className='btn btn-success'onClick={confirmOrder}>Confirm Order</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutFlow;

