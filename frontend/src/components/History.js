import React, { useEffect, useState } from 'react';
import { getReactionTimes } from '../services/timerService';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';

function History() {
  const [times, setTimes] = useState([]);

  const token = localStorage.getItem('token');
  if (!token) throw new Error('No token found');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  useEffect(() => {
    const fetchTimes = async () => {
      const data = await getReactionTimes();
      setTimes(data);
    };
    fetchTimes();
  }, [userId]);

  return (
    <div className="history">
      <h2>Historique des Temps de Réaction</h2>
      <ul>
        <li>{times.time} ms</li>
      </ul>
    </div>
  );
}
History.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default History;
