import React, { useState } from 'react';
import '../styles/F1Timer.css';
import { submitReactionTime } from '../services/timerService';
import PropTypes from 'prop-types';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

function F1Timer() {
  const [lightStatus, setLightStatus] = useState('red');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState(null);

  // Démarrer le test de réaction après une durée aléatoire
  const startTest = () => {
    setIsRunning(true);
    setLightStatus('red');
    setReactionTime(null);
    setError(null);

    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // entre 2 et 5 secondes

    setTimeout(() => {
      setLightStatus('green');
      setStartTime(Date.now());
    }, randomDelay);
  };

  // Gérer le clic sur le bouton
  const handleClick = async () => {
    if (isRunning) {
      if (lightStatus === 'green' && startTime) {
        const reaction = Date.now() - startTime;
        setReactionTime(reaction);

        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        try {
          console.log(userId, 'essaie de id ');
          await submitReactionTime({ user_id: userId, time: reaction });
          console.log('Temps de réaction enregistré avec succès');
        } catch (err) {
          console.error(
            'Erreur lors de la soumission du temps de réaction',
            err
          );
          setError("Échec de l'enregistrement du temps de réaction.");
        }
      } else {
        setReactionTime('Trop tôt !');
      }

      setIsRunning(false);
      setStartTime(null);
      setLightStatus('red');
    }
  };

  return (
    <div className="f1-timer">
      <div className={`light ${lightStatus}`} onClick={handleClick}>
        {lightStatus.toUpperCase()}
      </div>
      <button onClick={startTest} disabled={isRunning}>
        Commencer
      </button>
      {reactionTime && typeof reactionTime === 'number' && (
        <p>Votre temps de réaction : {reactionTime} ms</p>
      )}
      {reactionTime === 'Trop tôt !' && <p>{reactionTime}</p>}
      {error && <p className="error">{error}</p>}
      <Link to="/dashboard">Back to dashboard</Link>
    </div>
  );
}

F1Timer.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default F1Timer;
