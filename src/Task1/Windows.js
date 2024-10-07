import React, { useEffect, useState } from 'react';

const Windows = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

    
        window.addEventListener('resize', handleResize);

    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    return (
        <div className='container'>
            <h2>Window Width</h2>
            <p>Current Window Width: {windowWidth}px</p>
        </div>
    );
};

export default Windows;
