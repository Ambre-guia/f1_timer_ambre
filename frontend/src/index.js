// index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importation de createRoot depuis 'react-dom/client'
import './index.css'; // Importation des styles globaux
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Créez le point d'entrée de l'application avec createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
