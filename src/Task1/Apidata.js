import React, { useEffect, useState } from 'react'

const Apidata = () => {
    
    const [data,setData] =useState([]) 
    
    useEffect(() =>{
        fetch("https://6620a4553bf790e070b02dc5.mockapi.io/User")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) =>console.log(err))

    },[])
  return (
    <div>
      {data.map((item,index) =>{
        return(
            <div className='container d-flex col-md-6'>
             <table className='w-50'>
                <tr>
                    <th>{item.firstName}</th>
                </tr>
             </table>

        </div>
        )
      
      })}
    </div>
  )
}

export default Apidata


