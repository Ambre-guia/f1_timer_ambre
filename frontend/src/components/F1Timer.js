// components/F1Timer.js

import React, { useState, useEffect } from 'react';
import '../styles/F1Timer.css'; // Importation du CSS spécifique

function F1Timer() {
  const [color, setColor] = useState('red');
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (isStarted && color === 'green') {
      timer = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    }
    return () => clearInterval(timer);
  }, [color, isStarted]);

  const startTimer = () => {
    setIsStarted(true);
    setColor('green');
  };

  return (
    <div className="timer">
      <div className={`circle ${color}`} onClick={startTimer}>
        {time} ms
      </div>
      <button onClick={() => setIsStarted(false)}>Reset</button>
    </div>
  );
}

export default F1Timer;
