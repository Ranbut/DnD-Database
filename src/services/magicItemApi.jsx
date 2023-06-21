import api from './api';

export async function getMagicItemById(id, token) {
  const response = await api.get(`/magic-items/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllMagicItems(token) {
  const response = await api.get('/magic-items', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createMagicItem(body, token) {
  const response = await api.post('/magic-items', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function editMagicItem(id, body, token) {
  const response = await api.put(`/magic-items/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteMagicItem(id, token) {
  const response = await api.delete(`/magic-items/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}