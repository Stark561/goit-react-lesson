import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/users';

export async function fetchUsers(skip, limit) {
  const data = await axios({ params: { skip, limit } });
  return data;
}

export async function postUser(user) {
  const { data } = await axios.post('/add', user);
  return data;
}

export async function getSearchUsers(query, skip, limit) {
  const { data } = await axios('/search', {
    params: { q: query, skip, limit },
  });
  return data;
}
