const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllChapters() {
  const { body: { docs } } = await superagent.get(`${API_URL}/chapter`)
    .set('Authorization', `Bearer ${API_KEY}`);

  return docs;
}

async function getOneChapter(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/chapter/${id}`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

module.exports = {
  getAllChapters,
  getOneChapter,
}
