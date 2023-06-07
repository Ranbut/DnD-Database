import api from '../api';

export async function getSpells() {
  const response = await api.get('https://www.dnd5eapi.co/api/spells');
  return response.data.results;
}

export async function getSpellByIndex(index) {
  const response = await api.get(`https://www.dnd5eapi.co/api/spells/${index}`);
  return response.data;
}