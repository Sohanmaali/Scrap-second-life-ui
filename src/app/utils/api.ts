import axios from 'axios';

const API_URL = 'http://localhost:3001'; // Change to your NestJS server URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export default api;