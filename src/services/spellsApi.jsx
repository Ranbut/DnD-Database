import api from './api';

export async function getSpellById(id, token) {
  const response = await api.get(`/spells/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllSpells(token) {
  const response = await api.get('/spells', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createSpell(body, token) {
  const response = await api.post('/spells', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteSpell(id, token) {
  const response = await api.delete(`/spells/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}