const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllMovies() {
  const { data: { docs } } = await axios.get(`${API_URL}/movie`, config);
  
  return docs;
}

async function getOneMovie(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/movie/${id}`, config);
  
  return docs;
}

async function getOneMovieQuotes(id) {
  const { data: { docs } } = await axios.get(`${API_URL}/movie/${id}/quote`, config);
  
  return docs;
}

module.exports = {
  getAllMovies,
  getOneMovie,
  getOneMovieQuotes,
}
