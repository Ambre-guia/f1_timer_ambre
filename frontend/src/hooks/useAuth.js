import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        jwtDecode(token); // Decode the token without using `decoded`
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return { isAuthenticated };
};
