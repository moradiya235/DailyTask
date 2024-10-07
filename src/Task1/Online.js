import React, { useEffect, useState } from 'react'

const Online = () => {

    const[Isonline,setIsOnline] = useState([])

    useEffect(() =>{
        const handleOnline =() =>{
            setIsOnline(true)
        };
        const handleOffline =() =>{
            setIsOnline(false)
        }
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return() =>{
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);

        }

    },[])

  return (
    <div>
      <h3>Online/Offline</h3>
      <h4>User is currently : {Isonline ? "Online" : "Offline"}</h4>
    </div>
  )
}

export default Online
