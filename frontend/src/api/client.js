import axios from "axios";

const client = axios.create({
  baseURL: "/api",
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("hl_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getBackendUrl = () => {
  // If we're on localhost:3000 (React dev server), point to localhost:5001 (API)
  if (window.location.hostname === 'localhost' && window.location.port === '3000') {
    return 'http://localhost:5001/api';
  }
  // Everywhere else (Render, etc.), the API is on the same origin under /api
  return `${window.location.origin}/api`;
};

export default client;
