import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://asia-northeast3-hacker-event.cloudfunctions.net/app/api/',
  timeout: 5000,
});
