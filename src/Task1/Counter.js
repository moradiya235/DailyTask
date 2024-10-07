import React, { useState } from 'react'

const Counter = () => {

    const [number,setNumber] =useState(0)
  return (
    <div>
      <h2>Number:{number}</h2>
      <button className='btn btn-success m-2' onClick={() => setNumber(number+1)}> + </button>
      <button className='btn btn-danger' onClick={() => setNumber(number -1)} disabled={number <= 0}> - </button>
    </div>
  )
}

export default Counter
