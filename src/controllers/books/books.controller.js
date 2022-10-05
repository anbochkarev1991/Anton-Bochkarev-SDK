const superagent = require('superagent');
const { API_URL } = require('../../constants.js');

async function getAllBooks() {
  const { body: { docs }} = await superagent.get(`${API_URL}/book`);

  return docs;
}

async function getOneBook(id) {
  const { body: { docs }} = await superagent.get(`${API_URL}/book/${id}`);
  
  return docs;
}

async function getOneBookChapters(id) {
  const { body: { docs }} = await superagent.get(`${API_URL}/book/${id}/chapter`);
  
  return docs;
}

module.exports = {
  getAllBooks,
  getOneBook,
  getOneBookChapters,
}
