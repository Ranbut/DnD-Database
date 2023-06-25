import api from '../api';

export async function getEquipmentsCategories() {
  const response = await api.get('https://www.dnd5eapi.co/api/equipment-categories');
  return response.data.results;
}

export async function getEquipmentsByCategory(index) {
  const response = await api.get(`https://www.dnd5eapi.co/api/equipment-categories/${index}`);
  return response.data;
}

export async function getEquipments() {
  const response = await api.get(`https://www.dnd5eapi.co/api/equipment/`);
  return response.data;
}

export async function getEquipmentByIndex(index) {
  const response = await api.get(`https://www.dnd5eapi.co/api/equipment/${index}`);
  return response.data;
}

export async function getMagicItems() {
  const response = await api.get(`https://www.dnd5eapi.co/api/magic-items/`);
  return response.data;
}

export async function getMagicItemByIndex(index) {
  const response = await api.get(`https://www.dnd5eapi.co/api/magic-items/${index}`);
  return response.data;
}