import axios from 'axios';

// axios.defaults.baseURL = 'https://dummyjson.com/users';
axios.defaults.baseURL = 'https://api.escuelajs.co/api/v1';

export async function fetchUsers(skip, limit) {
  const data = await axios('/products', { params: { skip, limit } });
  return data;
}

export async function postUser(user) {
  const { data } = await axios.post('/add', user);
  return data;
}
export async function deleteUser(userId) {
  const { data } = await axios.delete(`/${userId}`);
  return data;
}

export async function getSearchUsers(query, skip, limit) {
  const { data } = await axios('/search', {
    params: { q: query, skip, limit },
  });
  return data;
}

export async function getUserDetails(userId) {
  const { data } = await axios(`/${userId}`);
  return data;
}

export async function getPosts(userId) {
  const { data } = await axios(`/${userId}/posts`);
  return data;
}
export async function getTodos(userId) {
  const { data } = await axios(`/${userId}/todos`);
  return data;
}

//////////////////////////

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const unSetAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};

export async function registretionuser(userData) {
  const { data } = await axios.post(`/users/`, userData);
  return data;
}

export async function logInUser(userData) {
  const { data } = await axios.post(`/auth/login`, userData);
  setAuthHeader(data.access_token);
  return data;
}

export async function getUserName() {
  const { data } = await axios(`/auth/profile`);
  return data;
}
