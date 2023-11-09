import axios from 'axios';

const API = axios.create({
  baseURL: 'https://port-0-taejo-backend-7lk2blopkdqx9.sel5.cloudtype.app/',
  headers: {
    // 'Content-Type': 'application/json',
  },
});

export default API;
