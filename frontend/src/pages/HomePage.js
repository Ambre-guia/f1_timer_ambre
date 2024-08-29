import React from 'react';
import Timer from '../components/Timer';
import Results from '../components/Results';
import { useAuth } from '../hooks/useAuth';

function HomePage() {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <h1>Welcome to F1 Reaction Timer</h1>
      <Timer />
      {user && <Results userId={user.userId} />}
    </div>
  );
}

export default HomePage;
