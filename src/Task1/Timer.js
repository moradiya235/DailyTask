import React, { useState } from 'react'

const Timer = () => {

    const [count ,setCount] =useState(0);

    const handleStart =() =>{
        setInterval(() => {
            setCount((data) => data+1)
        },1000)

    }
    // const handleStop = () =>{

    // }

  return (
    <div>
       <h3>Clock</h3>
       <h2>{count}</h2>
       <button className='btn btn-success' onClick={handleStart}>Start</button>
       <button className='btn btn-danger' >Stop</button>
    </div>
  )
}

export default Timer
