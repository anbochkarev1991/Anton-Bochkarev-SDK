const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllQuotes() {
  const { data } = await axios.get(`${API_URL}/quote`, config);
  
  return data;
}

async function getOneQuote(id) {
  const { data } = await axios.get(`${API_URL}/quote/${id}`, config);
  
  return data;
}

getAllChapters();

module.exports = {
  getAllChapters,
  getOneChapter,
}
