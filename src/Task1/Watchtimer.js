import React, { useState, useEffect } from 'react';

const Watchtimer = () => {
    const [isActive, setIsActive] = useState(false); 
    const [seconds, setSeconds] = useState(0); 

    useEffect(() => {
        let interval = null;

        
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval); 
        }

        
        return () => clearInterval(interval);
    }, [isActive, seconds]); 

    const handleStartStop = () => {
        setIsActive(prevActive => !prevActive); 
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div className='container text-center col-md-6 p-5'>
            <h2>Timer</h2>
            <p>{seconds} seconds</p>
            <button className='btn btn-primary' onClick={handleStartStop}>
                {isActive ? 'Stop' : 'Start'}
            </button>
            <button className='btn btn-danger ml-2' onClick={handleReset}>
                Reset
            </button>
        </div>
    );
};

export default Watchtimer;
