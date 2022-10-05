import superagent from 'superagent';
const { API_URL } = require('../../constants.js');

async function getAllMovies(apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie`)
      .set('Authorization', `Bearer ${apiKey}`);
  
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneMovie(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

async function getOneMovieQuotes(id: string, apiKey: string) {
  try {
    const { body: { docs } } = await superagent.get(`${API_URL}/movie/${id}/quote`)
      .set('Authorization', `Bearer ${apiKey}`);
    
    return docs;
  } catch (err) {
    throw new Error(err);
  }
}

export {
  getAllMovies,
  getOneMovie,
  getOneMovieQuotes,
}
