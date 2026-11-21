import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://dev.seekingguru.au', //[cite: 2]
  // Note: The Postman collection uses form-data, so we handle FormData objects natively
});

// Optional: Automatically attach the token if available in localStorage
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('login_token');
  if (token) {
    config.headers.token = token; //
  }
  return config;
});