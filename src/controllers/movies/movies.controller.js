const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllMovies() {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie`)
      .set('Authorization', `Bearer ${API_KEY}`);
  
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneMovie(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneMovieQuotes(id) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}/quote`)
      .set('Authorization', `Bearer ${API_KEY}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = {
  getAllMovies,
  getOneMovie,
  getOneMovieQuotes,
}
