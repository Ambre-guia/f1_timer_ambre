import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getReactionTimes } from '../services/timerService';

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
Results.propTypes = {
  userId: PropTypes.string.isRequired, // Spécifie que userId est requis et doit être une chaîne
};
export default Results;
