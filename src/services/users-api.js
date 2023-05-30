import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/users';

export async function fetchUsers(skip, limit) {
  const data = await axios({ params: { skip, limit } });
  return data;
}
