import superagent from 'superagent';
const { API_URL } = require('../../constants.js');

async function getAllChapters(apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/chapter`)
      .set('Authorization', `Bearer ${apiKey}`);
  
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneChapter(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/chapter/${id}`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getAllChapters,
  getOneChapter,
}
