const axios = require('axios');
const { API_URL, config, API_KEY } = require('../../constants.js');

async function getAllChapters() {
  const { data: { docs } } = await axios({
    method: 'get',
    url: `${API_URL}/chapter`,
    headers: config.headers
  });

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
