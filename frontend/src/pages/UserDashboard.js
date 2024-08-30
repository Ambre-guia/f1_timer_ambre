import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserDashboard.css';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
        const res = await axios.get(
          `http://localhost:5000/api/users/dashboard/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
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
        <div className="center">
          <Link to={`/history`} className="first">
            History
          </Link>
          <Link to={`/f1-timer`}>F1-timer</Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;
