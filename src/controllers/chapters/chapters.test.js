const request = require('supertest');
const { API_URL, API_KEY } = require('../../constants');

describe('Test GET /chapter',  () => {
  test('It should respond with 200 success', async () => {
    const response = await request(API_URL)
      .get('/chapter')
      .set('Authorization', `Bearer ${API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test GET /chapter/:id',  () => {
  test('It should respond with 200 success', async () => {
    const allChapters = await request(API_URL)
      .get('/chapter')
      .set('Authorization', `Bearer ${API_KEY}`);

      const firstChapterId = allChapters.body.docs[0]._id;

      const response = await request(API_URL)
        .get(`/chapter/${firstChapterId}`)
        .set('Authorization', `Bearer ${API_KEY}`)
        .expect('Content-Type', /json/)
        .expect(200);
  });
});