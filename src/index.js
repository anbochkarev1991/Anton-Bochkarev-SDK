const { getAllBooks, getOneBook, getOneBookChapters } = require('./controllers/books/books.controller');
const { getAllChapters, getOneChapter} = require('./controllers/chapters/chapters.controller');


module.exports = {
  getAllBooks,
  getAllChapters,
  getOneBook,
  getOneBookChapters,
  getOneChapter,
}
