import axios from 'axios';

const API = axios.create({
  baseURL: 'http://3.34.4.220:3000/',
  headers: {
    // 'Content-Type': 'application/json',
  },
});

export default API;
