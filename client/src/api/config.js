import axios from 'axios';

// Debug environment variables
console.log('Environment Variables:', {
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  REACT_APP_IMAGES_URL: process.env.REACT_APP_IMAGES_URL,
  NODE_ENV: process.env.NODE_ENV
});

// Determine API base URL with fallbacks
const getApiBaseUrl = () => {
  // If environment variable is set, use it
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Fallback based on current hostname
  const hostname = window.location.hostname;
  
  if (hostname === 'yomu-rho.vercel.app' || hostname.includes('vercel.app')) {
    return 'https://yomu.onrender.com/api';
  }
  
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:5000/api';
  }
  
  // Default fallback
  return 'https://yomu.onrender.com/api';
};

const baseURL = getApiBaseUrl();

console.log('Determined API Base URL:', baseURL);

// Create axios instance with base URL
const API = axios.create({
  baseURL: baseURL,
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

// Utility function to get images URL
export const getImagesUrl = () => {
  let baseUrl;
  
  if (process.env.REACT_APP_IMAGES_URL) {
    baseUrl = process.env.REACT_APP_IMAGES_URL;
  } else {
    const hostname = window.location.hostname;
    
    if (hostname === 'yomu-rho.vercel.app' || hostname.includes('vercel.app')) {
      baseUrl = 'https://yomu.onrender.com/images';
    } else if (hostname === 'localhost' || hostname === '127.0.0.1') {
      baseUrl = 'http://localhost:5000/images';
    } else {
      baseUrl = 'https://yomu.onrender.com/images';
    }
  }
  
  // Ensure the URL doesn't end with a slash
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

export default API;
