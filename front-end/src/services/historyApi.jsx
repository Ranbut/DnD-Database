import api from './api';

export async function getAllHistory(token) {
  const response = await api.get('/history', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function addHistory(body, token) {
    const response = await api.post('/history', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }
  

export async function deleteAllHistory(token) {
    const response = await api.delete('/history', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }