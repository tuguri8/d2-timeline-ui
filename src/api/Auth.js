import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export function login(userId, password) {
  return axios.post(`${BASE_URL}/login`, {
    userId: userId,
    password: password
  });
}

export function signup(userId, userName, password) {
  return axios.post(`${BASE_URL}/user/signup`, {
    userId: userId,
    userName: userName,
    password: password
  });
}
