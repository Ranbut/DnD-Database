import api from './api';

export async function signUp(username, email, password) {
  const response = await api.post('/users', { username, email, password });
  return response.data;
}