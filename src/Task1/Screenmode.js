import React, { useState } from 'react';

const Screenmode = () => {
    
    const [DarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    const lightTheme = {
        backgroundColor: '#ffffff',
        color: '#000000',
        padding: '20px',
        border: '1px solid #000'
    };

    const darkTheme = {
        backgroundColor: '#333333',
        color: '#ffffff',
        padding: '20px',
        border: '1px solid #fff'
    };

    return (
        <div style={DarkMode ? darkTheme : lightTheme}>
            <h1>{DarkMode ? "Dark Mode" : "Light Mode"}</h1>
            <p>This is an example of {DarkMode ? "dark" : "light"} mode styling.</p>
            <button onClick={toggleTheme} className='btn btn-primary'>
                Toggle to {DarkMode ? "Light" : "Dark"} Mode
            </button>
        </div>
    );
};

export default Screenmode;

