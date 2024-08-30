import React, { useEffect, useState } from 'react';
import { getReactionTimes } from '../services/timerService';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import '../styles/History.css';
import { Link } from 'react-router-dom';

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
      <p className="bestTime">{times.time} ms</p>
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}
History.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default History;
