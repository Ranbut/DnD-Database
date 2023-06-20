import api from './api';

export async function getMonsterById(id, token) {
  const response = await api.get(`/monsters/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllMonster(token) {
  const response = await api.get('/monsters', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createMonster(body, token) {
  const response = await api.post('/monsters', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteMonster(id, token) {
  const response = await api.delete(`/monsters/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}