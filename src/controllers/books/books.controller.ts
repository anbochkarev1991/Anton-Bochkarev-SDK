import superagent from 'superagent';
const { API_URL } = require('../../constants.js');

async function getAllBooks() {
  try {
    const { body: { docs }} = await superagent.get(`${API_URL}/book`);
  
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneBook(id) {
  try {
    const { body: { docs }} = await superagent.get(`${API_URL}/book/${id}`);
    
    return docs;

  } catch (err) {
    throw new Error(err);
  }
}

async function getOneBookChapters(id) {
  try {
    const { body: { docs }} = await superagent.get(`${API_URL}/book/${id}/chapter`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getAllBooks,
  getOneBook,
  getOneBookChapters,
}
