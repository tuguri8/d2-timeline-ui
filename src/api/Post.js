import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const config = {
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
};

export function posting(content) {
  return axios.post(`${BASE_URL}/api/post`, {
    content: content
  }, config);
}
