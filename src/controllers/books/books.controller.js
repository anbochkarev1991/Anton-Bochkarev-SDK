const axios = require('axios');
const { API_URL } = require('../../constants.js');

async function getAllBooks() {
  const { data } = await axios(`${API_URL}/book`);
  
  return data;
}

async function getOneBook(id) {
  const { data } = await axios(`${API_URL}/book/${id}`);
  
  return data;
}

async function getOneBookChapters(id) {
  const { data } = await axios(`${API_URL}/book/${id}/chapter`);
  
  return data;
}

module.exports = {
  getAllBooks,
  getOneBook,
  getOneBookChapters,
}
