const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllCharacters() {
  const { data: { docs } } = await axios.get(`${API_URL}/character`, config);
  
  return docs;
}

async function getOneCharacter(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/character/${id}`, config);
  
  return docs;
}

async function getOneCharacterQuotes(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/character/${id}/quote`, config);
  
  return docs;
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
}
