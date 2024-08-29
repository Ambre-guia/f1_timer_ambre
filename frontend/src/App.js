import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import ReactionHistory from './components/ReactionHistory';
import Timer from './components/Timer';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/reaction-history"
          element={
            <PrivateRoute>
              <ReactionHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="/f1-timer"
          element={
            <PrivateRoute>
              <Timer />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
