const request = require('supertest');
const { API_URL } = require('../../constants');

describe('Test GET /quote',  () => {
  test('It should respond with 200 success', async () => {
    const response = await request(API_URL)
      .get('/quote')
      .set('Authorization', `Bearer ${process.env.API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test GET /quote/:id',  () => {
  test('It should respond with 200 success', async () => {
    const allQuotes = await request(API_URL)
      .get('/quote')
      .set('Authorization', `Bearer ${process.env.API_KEY}`);

      const firstQuoteId = allQuotes.body.docs[0]._id;

      const response = await request(API_URL)
        .get(`/quote/${firstQuoteId}`)
        .set('Authorization', `Bearer ${process.env.API_KEY}`)
        .expect('Content-Type', /json/)
        .expect(200);
  });
});