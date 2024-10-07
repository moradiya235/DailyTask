import React, { useState, useEffect } from 'react';

const PollingData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://dummyjson.com/products');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result.products); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <div>
      <h1>Polling Data from API</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.length > 0 && (
        <div>
          <h2>Products:</h2>
          <ul>
            {data.map((product) => (
              <li key={product.id}>
                <strong>{product.title}</strong> - {product.category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PollingData;
