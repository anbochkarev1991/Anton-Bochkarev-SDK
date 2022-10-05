import superagent from 'superagent';
const { API_URL } = require('../../constants.js');

async function getAllQuotes(apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/quote`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneQuote(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/quote/${id}`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getAllQuotes,
  getOneQuote,
}
