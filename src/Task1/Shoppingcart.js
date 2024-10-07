import React, { useState } from 'react'

const Shoppingcart = () => {
    const [count,setCount] =useState(0)

  return (
    <div className='container col-md-6 p-5'>
      <h3>Shopping Cart</h3>
      <div >
      <h4>Quantity:{count}</h4>
      <button className='btn btn-success m-2' onClick={() => setCount(count+1)}> + </button>
      <button className='btn btn-danger ' onClick={() => setCount(count-1)} disabled={count <= 0} > - </button>
    </div>
    </div>
  )
}

export default Shoppingcart
