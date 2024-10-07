import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";


const Likecount = () => {
    const [like,setLike] =useState(0);
  return (
    <div className='container col-md-6 p-5'>
      <h3>Like:{like}</h3>
      <button className='btn btn-primary' onClick={() => setLike(like +1)}>Like<AiFillLike /></button>
    </div>
  )
}

export default Likecount
