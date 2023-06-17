import api from './api';

export async function getBookmarkByIndex(index, token) {
  const response = await api.get(`/bookmarks/${index}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getAllBookmarks(token) {
    const response = await api.get("/bookmarks/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }

export async function removeBookmark(index, token) {
    const response = await api.delete(`/bookmarks/${index}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }
  

export async function addBookmark(body, token) {
    const response = await api.post('/bookmarks', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    return response.data;
  }