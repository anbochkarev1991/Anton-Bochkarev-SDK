const request = require('supertest');
const { API_URL } = require('../../constants');

describe('Test GET /movie',  () => {
  test('It should respond with 200 success', async () => {
    const response = await request(API_URL)
      .get('/movie')
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test GET /movie/:id',  () => {
  test('It should respond with 200 success', async () => {
    const allMovies = await request(API_URL)
      .get('/movie')
      .set('Authorization', `Bearer ${process.env.API_KEY}`);

      const firstMovieId = allMovies.body.docs[0]._id;

      const response = await request(API_URL)
        .get(`/movie/${firstMovieId}`)
        .set('Authorization', `Bearer ${process.env.API_KEY}`)
        .expect('Content-Type', /json/)
        .expect(200);
  });
});