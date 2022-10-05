# SDK for LOTR API

## Installation

npm install antonbochkarev-sdk / yarn add antonbochkarev-sdk

## Functionality

| API route | Function | Usage | Response |
| --- | --- | --- | --- |
| /book | __package_import_name__.getAllBooks() |  | List of all "The Lord of the Rings" books |
| /book/:id | __package_import_name__.getOneBook(id: string) | ID required | Request one specific book |
| /book/:id/chapter | __package_import_name__.getOneBookChapters(id: string) | ID required | Request all chapters of one specific book |
| /movie | __package_import_name__.getAllMovies(apiKey: string) | You should use your API key from https://the-one-api.dev/ | List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies |
| /movie/:id | __package_import_name__.getOneMovie(id: string, apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | Request one specific movie |
| /movie/:id/quote | __package_import_name__.getAllMovies(apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | Request all movie quotes for one specific movie (only working for the LotR trilogy) |
| /character | __package_import_name__.getAllCharacters(apiKey: string) | You should use your API key from https://the-one-api.dev/ | List of characters including metadata like name, gender, realm, race and more |
| /character/:id | __package_import_name__.getOneCharacter(id: string, apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | 
Request one specific character |
| /character/:id/quote | __package_import_name__.getOneCharacterQuotes(id: string, apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | Request all movie quotes of one specific character |
| /quote | __package_import_name__.getAllQuotes(apiKey: string) | You should use your API key from https://the-one-api.dev/ | List of all movie quotes |
| /quote/:id | __package_import_name__.getOneQuote(id: string, apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | Request one specific movie quote |
| /chapter | __package_import_name__.getAllChapters(apiKey: string) | You should use your API key from https://the-one-api.dev/ | List of all book chapters |
| /chapter/:id | __package_import_name__.getOneChapter(apiKey: string) | ID required. You should use your API key from https://the-one-api.dev/ | Request one specific book chapter |

## Testing
For testing you should clone this repo, run `npm install`, then run `API_KEY=__your_API_key__  npm test`.
There are five test suites, one for each entity.
