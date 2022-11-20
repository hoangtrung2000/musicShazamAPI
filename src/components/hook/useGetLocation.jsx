import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetLocation = () => {
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState('');
  // Get Geolocation API
  useEffect(() => {
    axios
      .get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEO_API_KEY
        }`,
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [country]);

  return { country, loading };
};

export default useGetLocation;
