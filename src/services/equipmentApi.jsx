import api from './api';

export async function getEquipmentById(id, token) {
  const response = await api.get(`/equipments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllEquipments(token) {
  const response = await api.get('/equipments', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function createEquipment(body, token) {
    const response = await api.post('/equipments', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }