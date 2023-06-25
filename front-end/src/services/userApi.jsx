import api from './api';

export async function signUp(username, email, password) {
  const response = await api.post('/users', { username, email, password });
  return response.data;
}

export async function updateAvatar(body, token) {
  const response = await api.put('/users/avatar', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}