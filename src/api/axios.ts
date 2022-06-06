import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.ggpredict.dev:8080/restapi/players',
});

export default instance;
