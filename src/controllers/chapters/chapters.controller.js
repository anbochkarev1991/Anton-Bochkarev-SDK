const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllChapters() {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/chapter`)
      .set('Authorization', `Bearer ${API_KEY}`);
  
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneChapter(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/chapter/${id}`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllChapters,
  getOneChapter,
}
