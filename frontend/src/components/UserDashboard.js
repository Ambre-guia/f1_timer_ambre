import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleViewHistory = () => {
    navigate('/reaction-history'); // Navigate to reaction history page
  };

  const handleUseTimer = () => {
    navigate('/f1-timer'); // Navigate to F1 timer page
  };

  return (
    <div className="dashboard">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={handleViewHistory}>View Reaction Time History</button>
      <button onClick={handleUseTimer}>Use F1 Timer</button>
    </div>
  );
};

export default UserDashboard;
