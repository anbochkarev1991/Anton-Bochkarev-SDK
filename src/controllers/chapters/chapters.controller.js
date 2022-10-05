const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllChapters() {
  const { data } = await axios.get(`${API_URL}/chapter`, config);
  
  return data;
}

async function getOneChapter(id) {
  const { data } = await axios.get(`${API_URL}/chapter/${id}`, config);
  
  return data;
}

module.exports = {
  getAllChapters,
  getOneChapter,
}
