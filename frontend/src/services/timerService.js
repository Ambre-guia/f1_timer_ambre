import axios from 'axios';

const API_URL = 'http://localhost:5000/api/timers';

// Fonction pour soumettre un temps de réaction
export const submitReactionTime = async (data) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.post(`${API_URL}/create`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Erreur lors de la soumission du temps de réaction:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

// Fonction pour obtenir les temps de réaction
export const getReactionTimes = async (userId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(`${API_URL}/best-time`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des temps de réaction:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};
