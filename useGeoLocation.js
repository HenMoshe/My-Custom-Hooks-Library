import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState({});
  
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      throw new Error('The browser does not support geolocation');
    }
  }, []);

  return geoLocation;
};

export default useGeoLocation;
