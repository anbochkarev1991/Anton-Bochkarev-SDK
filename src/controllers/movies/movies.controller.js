const superagent = require('superagent');
const { API_URL, API_KEY } = require('../../constants.js');

async function getAllMovies() {
  const { body: { docs } } = await superagent.get(`${API_URL}/movie`)
    .set('Authorization', `Bearer ${API_KEY}`);

  return docs;
}

async function getOneMovie(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

async function getOneMovieQuotes(id) {
  const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}/quote`)
    .set('Authorization', `Bearer ${API_KEY}`);
  
  return docs;
}

module.exports = {
  getAllMovies,
  getOneMovie,
  getOneMovieQuotes,
}
