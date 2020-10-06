import axios from 'axios';

const api = axios.create({
  baseURL: 'https://appgo.mycare.med.br',
});

export default api;
