import React from 'react';
import { useCart } from './CartContext';


const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

const Productlist = () => {
  const { dispatch } = useCart();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className='container col-md-6 p-2'>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Productlist;
