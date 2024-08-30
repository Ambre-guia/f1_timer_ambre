import React, { useEffect, useState } from 'react';
import { getReactionTimes } from '../services/timerService';
import PropTypes from 'prop-types';

function History({ userId }) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const fetchTimes = async () => {
      const data = await getReactionTimes(userId);
      setTimes(data);
    };
    fetchTimes();
  }, [userId]);

  return (
    <div className="history">
      <h2>Historique des Temps de Réaction</h2>
      <ul>
        {times.map((time, index) => (
          <li key={index}>
            {time.time} ms enregistré le {new Date(time.date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
History.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default History;
