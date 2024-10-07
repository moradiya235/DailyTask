import React, { useState, useEffect } from 'react';

const Location = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState(null);
  const [isWatching, setIsWatching] = useState(false);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const errorCallback = (err) => {
      setError(`Error: ${err.message}`);
    };

    if (isWatching) {
      const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback);

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, [isWatching]); 

  return (
    <div>
      <h1>Geolocation Tracker</h1>
      {error && <p>{error}</p>}
      {location.latitude && location.longitude ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
      
    </div>
  );
};

export default Location;
