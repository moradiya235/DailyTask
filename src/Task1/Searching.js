import React, { useState, useEffect } from 'react';

function Searching() {
  const data = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Mango', 'Grapes'];

  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);


    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]); 


  useEffect(() => {
    if (debouncedTerm) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(debouncedTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [debouncedTerm, data]); 

  return (
    <div>
      <h1>Debounced Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Searching;
