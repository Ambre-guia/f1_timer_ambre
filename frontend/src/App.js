import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import History from './components/History';
import F1Timer from './components/F1Timer';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/history" element={<History />} />
      <Route path="/f1-timer" element={<F1Timer />} />
    </Routes>
  );
}

export default App;
