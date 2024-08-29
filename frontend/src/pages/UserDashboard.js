import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/UserDashboard.css';

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/users/dashboard', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(res.data);
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
          <p>Email: {user.email}</p>
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
