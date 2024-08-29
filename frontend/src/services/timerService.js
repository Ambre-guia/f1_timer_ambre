import axios from 'axios';

const API_URL = 'http://localhost:5000/api/timer';

export const submitReactionTime = async (data) => {
  const token = localStorage.getItem('token');
  await axios.post(`${API_URL}/submit-reaction-time`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getReactionTimes = async (userId) => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${API_URL}/get-reaction-times/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
