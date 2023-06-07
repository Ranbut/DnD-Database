import api from '../api';

export async function getMonsters() {
  const response = await api.get('https://www.dnd5eapi.co/api/monsters');
  return response.data.results;
}

export async function getMonsterByIndex(index) {
  const response = await api.get(`https://www.dnd5eapi.co/api/monsters/${index}`);
  return response.data;
}