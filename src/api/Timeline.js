import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const config = {
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
};

export function getTimelinePost() {
  return axios.get(`${BASE_URL}/api/timeline`, config);
}
