const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllChapters() {
  const { data: { docs } } = await axios.get(`${API_URL}/chapter`, config);
  
  return docs;
}

async function getOneChapter(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/chapter/${id}`, config);
  
  return docs;
}

module.exports = {
  getAllChapters,
  getOneChapter,
}
