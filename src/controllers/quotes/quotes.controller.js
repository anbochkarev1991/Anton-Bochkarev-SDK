const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllQuotes() {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/quote`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneQuote(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/quote/${id}`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllQuotes,
  getOneQuote,
}
