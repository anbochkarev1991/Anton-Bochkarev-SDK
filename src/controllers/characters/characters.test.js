const request = require('supertest');
const { API_URL, API_KEY } = require('../../constants');

describe('Test GET /character',  () => {
  test('It should respond with 200 success', async () => {
    const response = await request(API_URL)
      .get('/character')
      .set('Authorization', `Bearer ${API_KEY}`)
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe('Test GET /character/:id',  () => {
  test('It should respond with 200 success', async () => {
    const allCharacters = await request(API_URL)
      .get('/character')
      .set('Authorization', `Bearer ${API_KEY}`);

      const firstCharacterId = allCharacters.body.docs[0]._id;

      const response = await request(API_URL)
        .get(`/character/${firstCharacterId}`)
        .set('Authorization', `Bearer ${API_KEY}`)
        .expect('Content-Type', /json/)
        .expect(200);
  });

  describe('Test GET /character/:id/quote',  () => {
    test('It should respond with 200 success', async () => {
      const allCharacters = await request(API_URL)
        .get('/character')
        .set('Authorization', `Bearer ${API_KEY}`);
  
        const firstCharacterId = allCharacters.body.docs[0]._id;
  
        const response = await request(API_URL)
          .get(`/character/${firstCharacterId}/quote`)
          .set('Authorization', `Bearer ${API_KEY}`)
          .expect('Content-Type', /json/)
          .expect(200);
    });
  });
});
