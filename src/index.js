const { getAllBooks, getOneBook, getOneBookChapters } = require('./controllers/books/books.controller');
const { getAllChapters, getOneChapter} = require('./controllers/chapters/chapters.controller');
const { getAllCharacters, getOneCharacter, getOneCharacterQuotes} = require('./controllers/characters/characters.controller');
const { getAllMovies, getOneMovie } = require('./controllers/movies/movies.controller');
const { getAllQuotes, getOneQuote } = require('./controllers/quotes/quotes.controller');


module.exports = {
  getAllBooks,
  getAllChapters,
  getOneBook,
  getOneBookChapters,
  getOneChapter,
  getAllCharacters,
  getOneCharacter,
  getOneCharacterQuotes,
  getAllMovies,
  getOneMovie,
  getAllQuotes,
  getOneQuote,
}
