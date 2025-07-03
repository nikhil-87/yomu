import axios from 'axios';

// Debug environment variables
console.log('Environment Variables:', {
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  REACT_APP_IMAGES_URL: process.env.REACT_APP_IMAGES_URL,
  NODE_ENV: process.env.NODE_ENV
});

// Create axios instance with base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('API Base URL:', API.defaults.baseURL);

// Request interceptor for logging (optional)
API.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.baseURL + config.url);
    console.log('Full config:', config);
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
API.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Error Details:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
      config: error.config,
      request: error.request
    });
    return Promise.reject(error);
  }
);

export default API;
