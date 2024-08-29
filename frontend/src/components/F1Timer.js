import React, { useState, useEffect } from "react";
import axios from "axios";

const F1Timer = () => {
  const [timer, setTimer] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    setStartTime(Date.now());
    const id = setInterval(() => {
      setTimer(Date.now() - startTime);
    }, 1);
    setIntervalId(id);
  };

  const stop = async () => {
    clearInterval(intervalId);
    const time = Date.now() - startTime;
    try {
      await axios.post(
        "/api/timers/create",
        { time },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
    } catch (err) {
      console.error(err.response.data);
    }
    setTimer(0);
    setStartTime(null);
  };

  return (
    <div>
      <h2>F1 Timer</h2>
      <p>Time: {timer} ms</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
};

export default F1Timer;
