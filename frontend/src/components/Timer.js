import React, { useState } from 'react';
import { submitReactionTime } from '../services/timerService';

function Timer() {
  const [waiting, setWaiting] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [reactionTime, setReactionTime] = useState(null);

  const startTimer = () => {
    setWaiting(true);
    const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2 to 5 seconds delay
    setTimeout(() => {
      setStartTime(Date.now());
      setWaiting(false);
    }, randomDelay);
  };

  const stopTimer = () => {
    if (waiting) return; // Prevent clicking before the green light
    const time = Date.now() - startTime;
    setReactionTime(time);
    submitReactionTime({ time });
  };

  return (
    <div className="timer">
      <h2>F1 Reaction Timer</h2>
      <button onClick={startTimer} disabled={waiting}>
        {waiting ? 'Wait for Green...' : 'Start'}
      </button>
      <button onClick={stopTimer} disabled={waiting || startTime === 0}>
        Stop
      </button>
      {reactionTime !== null && <p>Your reaction time: {reactionTime} ms</p>}
    </div>
  );
}

export default Timer;
