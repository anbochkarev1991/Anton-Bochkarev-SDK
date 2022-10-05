const axios = require('axios');
const { API_URL, config } = require('../../constants.js');

async function getAllMovies() {
  const { data } = await axios.get(`${API_URL}/movie`, config);
  
  return data;
}

async function getOneMovie(id) {
  const { data } = await axios.get(`${API_URL}/movie/${id}`, config);
  
  return data;
}

async function getOneMovieQuotes(id) {
  const { data } = await axios.get(`${API_URL}/movie/${id}/quote`, config);
  
  return data;
}

module.exports = {
  getAllMovies,
  getOneMovie,
  getOneMovieQuotes,
}
