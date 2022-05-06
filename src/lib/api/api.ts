import axios from 'axios';

export const client = axios.create({
  baseURL: 'http://3.36.251.74:5000',
  timeout: 1000,
});
