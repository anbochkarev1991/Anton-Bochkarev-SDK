import superagent from 'superagent';
const { API_URL } = require('../../constants.js');

async function getAllCharacters(apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneCharacter(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneCharacterQuotes(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/character/${id}/quote`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}
export {
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
}
