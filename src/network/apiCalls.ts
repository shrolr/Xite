import axios from 'axios';
import {endpoints} from '.';
import config from '../constants/config';
var httpClient = axios.create({
  httpsAgent: {
    rejectUnauthorized: false,
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
httpClient.defaults.timeout = 1500;

const getAllMusicVideos = () => {
  return httpClient.get(config.server + endpoints.getAllMusicVideos);
};

export {getAllMusicVideos};
