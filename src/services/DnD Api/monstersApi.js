import api from '../api';

export async function getMonsters() {
  const response = await api.get('https://www.dnd5eapi.co/api/monsters');
  return response.data;
}