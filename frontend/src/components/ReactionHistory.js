import React, { useEffect, useState } from 'react';
import { getReactionTimes } from '../services/timerService';

const ReactionHistory = () => {
  const [times, setTimes] = useState([]);
  const [bestTime, setBestTime] = useState(null);

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const data = await getReactionTimes(); // Fetch times for the logged-in user
        setTimes(data);
        if (data.length > 0) {
          const minTime = Math.min(...data.map((time) => time.time));
          setBestTime(minTime);
        }
      } catch (error) {
        console.error('Error fetching reaction times:', error);
      }
    };
    fetchTimes();
  }, []);

  return (
    <div className="reaction-history">
      <h2>Reaction Time History</h2>
      <ul>
        {times.map((time, index) => (
          <li
            key={index}
            style={{ color: time.time === bestTime ? 'green' : 'black' }}
          >
            {time.time} ms on {new Date(time.date).toLocaleString()}
          </li>
        ))}
      </ul>
      {bestTime && <p>Best Time: {bestTime} ms</p>}
    </div>
  );
};

export default ReactionHistory;
