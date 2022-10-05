const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllCharacters() {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneCharacter(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneCharacterQuotes(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}/quote`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
}
