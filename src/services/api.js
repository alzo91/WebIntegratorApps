import axios from 'axios';

const api = axios.create({
  baseURL: 'http://systemsfleet.ddns.net:3334',
});

export default api;
