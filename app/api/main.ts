import axios from 'axios';

const API = axios.create({
  baseURL: ' http://13.209.97.212:3000/',
  headers: {
    // 'Content-Type': 'application/json',
  },
});

export default API;
