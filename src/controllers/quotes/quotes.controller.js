const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllQuotes() {
  const { data: { docs } } = await axios.get(`${API_URL}/quote`, config);
  
  return docs;
}

async function getOneQuote(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/quote/${id}`, config);
  
  return docs;
}

module.exports = {
  getAllQuotes,
  getOneQuote,
}
