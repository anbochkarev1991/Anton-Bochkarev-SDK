const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllQuotes() {
  const { body: { docs } } = await superagent.get(`${API_URL}/quote`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

async function getOneQuote(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/quote/${id}`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

module.exports = {
  getAllQuotes,
  getOneQuote,
}
