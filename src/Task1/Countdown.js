import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [countdown, setCountdown] = useState(10);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (countdown <= 0) {
      setIsActive(false); 
      return;
    }

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000); 

    return () => clearInterval(intervalId); 
  }, [countdown]); 

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>{isActive ? `Time Remaining: ${countdown} seconds` : 'Time is over'}</p>
    </div>
  );
};

export default Countdown;

