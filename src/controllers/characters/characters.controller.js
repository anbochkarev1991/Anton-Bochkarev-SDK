const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllCharacters() {
  const { body: { docs } } = await superagent.get(`${API_URL}/character`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

async function getOneCharacter(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

async function getOneCharacterQuotes(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}/quote`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
}
