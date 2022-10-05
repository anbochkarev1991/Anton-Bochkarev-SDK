const axios = require('axios');
const { API_URL } = require('../../constants.js');

async function getAllBooks() {
  const { data: { docs } } = await axios.get(`${API_URL}/book`);
  
  return docs;
}

async function getOneBook(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/book/${id}`);
  
  return docs;
}

async function getOneBookChapters(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/book/${id}/chapter`);
  
  return docs;
}

module.exports = {
  getAllBooks,
  getOneBook,
  getOneBookChapters,
}
