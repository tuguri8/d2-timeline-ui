import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const config = {
  headers: {'Authorization': 'Bearer ' + localStorage.getItem('token')}
};

export function searchUser(name) {
  return axios.get(`${BASE_URL}/api/user/search?name=${name}`, config);
}

export function followUser(userId) {
  return axios.post(`${BASE_URL}/api/follow`, {
    followId: userId
  }, config);
}

export function unfollowUser(userId) {
  return axios.post(`${BASE_URL}/api/follow/unfollow`, {
    followId: userId
  }, config);
}
