import axios from 'axios';
import { baseURL } from './env-variables';

const Axios = axios.create({ baseURL });
Axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    token ? (config.headers.Authorization = `Bearer ${token}`) : delete config.headers.Authorization;

    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  null,
  { synchronous: true }
);

export default Axios;
