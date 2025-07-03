import axios from 'axios';

// Create axios instance with base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging (optional)
API.interceptors.request.use(
  (config) => {
    if (process.env.REACT_APP_DEBUG_MODE === 'true') {
      console.log('API Request:', config.method?.toUpperCase(), config.url);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (process.env.REACT_APP_DEBUG_MODE === 'true') {
      console.error('API Error:', error.response?.status, error.response?.data || error.message);
    }
    return Promise.reject(error);
  }
);

export default API;
