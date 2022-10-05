const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllCharacters() {
  const { data } = await axios(`${API_URL}/character`, config);
  
  return data;
}

async function getOneCharacter(id) {
  const { data } = await axios(`${API_URL}/character/${id}`, config);
  
  return data;
}

async function getOneCharacterQuotes(id) {
  const { data } = await axios(`${API_URL}/character/${id}/quote`, config);
  
  return data;
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
}
