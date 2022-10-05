import { getAllBooks, getOneBook, getOneBookChapters } from './controllers/books/books.controller';
import { getAllChapters, getOneChapter} from './controllers/chapters/chapters.controller';
import { getAllCharacters, getOneCharacter, getOneCharacterQuotes} from './controllers/characters/characters.controller';
import { getAllMovies, getOneMovie } from './controllers/movies/movies.controller';
import { getAllQuotes, getOneQuote } from './controllers/quotes/quotes.controller';

class lotrSDK {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  getAllBooks() {
    return getAllBooks();
  }

  getOneBook(id: string) {
    return getOneBook(id);
  }

  getOneBookChapters(id: string) {
    return getOneBookChapters(id);
  }

  getAllCharacters() {
    return getAllCharacters(this.apiKey);
  }

  getOneCharacter(id: string) {
    return getOneCharacter(id, this.apiKey);
  }

  getOneCharacterQuotes(id: string) {
    return getOneCharacterQuotes(id, this.apiKey);
  }

  getAllChapters() {
    return getAllChapters(this.apiKey);
  }

  getOneChapter(id: string) {
    return getOneChapter(id, this.apiKey);
  }

  getAllMovies() {
    return getAllMovies(this.apiKey);
  }

  getOneMovie(id: string) {
    return getOneMovie(id, this.apiKey);
  }

  getAllQuotes() {
    return getAllQuotes(this.apiKey);
  }

  getOneQuote(id: string) {
    return getOneQuote(id, this.apiKey);
  }
}

export default lotrSDK;
