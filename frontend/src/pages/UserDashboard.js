import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserDashboard.css';
import { jwtDecode } from 'jwt-decode';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      console.log('dodo');
      try {
        console.log('tata');
        const token = localStorage.getItem('token');
        console.log(token);
        if (!token) throw new Error('No token found');
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        const userId = decodedToken.userId;
        console.log(userId);
        const res = await axios.get(
          `http://localhost:5000/api/users/dashboard/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res);
        console.log('TITI');
        if (res && res.data) {
          setUser(res.data);
        } else {
          console.error('Response does not contain expected data:', res);
        }
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h2 className="dashboard">Dashboard</h2>
      {user ? (
        <div className="stats">
          <a href="/history">History</a>
          <a href="/f1-timer">F1 Timer</a>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;
