import React, { useEffect, useState } from 'react';
import { getReactionTimes } from '../services/timerService';
import PropTypes from 'prop-types';

function Results({ userId }) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const data = await getReactionTimes(userId);
      setTimes(data);
    };
    fetchTimes();
  }, [userId]);

  return (
    <div className="results">
      <h2>Reaction Times</h2>
      <ul>
        {times.map((time, index) => (
          <li key={index}>
            {time.time} ms on {new Date(time.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Define PropTypes for the Results component
Results.propTypes = {
  userId: PropTypes.string.isRequired, // userId should be a required string
};

export default Results;
