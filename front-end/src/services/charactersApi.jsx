import api from './api';

export async function createCharacter(body, token) {
    const response = await api.post('/char', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }