const request = require('supertest');
const { getAllBooks } = require('./books.controller')
const { API_URL } = require('../../constants');

describe('Test GET /book', () => {
  test('It should respond with 200 success', async () => {
    const response = await request(API_URL)
      .get('/book')
      .expect('Content-Type', /json/)
      .expect(200);

      const books = await getAllBooks();
      expect(books.length).toBe(3);
  });

  test('It should contain three books starts with The Fellowship Of The Ring', async () => {
    const response = await request(API_URL)
      .get('/book');

      expect(response.body.docs.length).toBe(3);
      expect(response.body.docs[0].name).toBe('The Fellowship Of The Ring');
  });
});

describe('Test GET /book/:id',  () => {
  test('It should respond with 200 success', async () => {
    const allBooks = await request(API_URL)
      .get('/book')

      const firstBookId = allBooks.body.docs[0]._id;

      const response = await request(API_URL)
        .get(`/book/${firstBookId}`)
        .expect('Content-Type', /json/)
        .expect(200);
  });

  describe('Test GET /book/:id/chapter',  () => {
    test('It should respond with 200 success', async () => {
      const allBooks = await request(API_URL)
        .get('/book')
  
        const firstBookId = allBooks.body.docs[0]._id;
  
        const response = await request(API_URL)
          .get(`/book/${firstBookId}/chapter`)
          .expect('Content-Type', /json/)
          .expect(200);
    });
  });
});
