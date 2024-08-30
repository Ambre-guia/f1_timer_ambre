import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/History.css';

const History = () => {
  const [bestTime, setBestTime] = useState(null);

  useEffect(() => {
    const fetchBestTime = async () => {
      try {
        const res = await axios.get('/api/timers/best-time', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setBestTime(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchBestTime();
  }, []);

  return (
    <div className="history">
      <h2>Best Time</h2>
      {bestTime ? (
        <p className="bestTime ">Time: {bestTime.time} ms</p>
      ) : (
        <p>No history</p>
      )}
      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
};

export default History;
