import axios from 'axios';

const api = axios.create({
  baseURL: 'http://systemsfleet.ddns.net:3334',
  mode: 'no-cors',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
