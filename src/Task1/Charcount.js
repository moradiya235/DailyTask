import React, { useState } from 'react';

const CharCount = () => {
    const [count, setCount] = useState(''); 

    const handleChange = (e) => {
        setCount(e.target.value); 
    };

    return (
        <div className='container col-md-6 p-5'>
            <h3 className='text-center'>Character Count</h3>
            <div>
                <label htmlFor=''>Character:</label>
                <input
                    type='text'
                    placeholder='Enter characters'
                    value={count}
                    onChange={handleChange}
                />
            </div>
            <p>Character Count: {count.length}</p> 
        </div>
    );
};

export default CharCount;

