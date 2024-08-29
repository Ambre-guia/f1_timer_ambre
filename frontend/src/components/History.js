import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
  const [bestTime, setBestTime] = useState(null);

  useEffect(() => {
    const fetchBestTime = async () => {
      try {
        const res = await axios.get("/api/timers/best-time", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setBestTime(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };
    fetchBestTime();
  }, []);

  return (
    <div>
      <h2>Best Time</h2>
      {bestTime ? <p>Time: {bestTime.time} ms</p> : <p>Loading...</p>}
      <a href="/dashboard">Back to Dashboard</a>
    </div>
  );
};

export default History;
