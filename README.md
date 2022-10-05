# SDK for LOTR API

## Installation

npm install antonbochkarev-sdk / yarn add antonbochkarev-sdk

## Functionality

Create new instance of SDK API with your API key from https://the-one-api.dev/. API key will be used in methods where required. Then you can use methods from instanse of this class.

| API route | Function | Usage | Response |
| --- | --- | --- | --- |
| /book | __package_import_name__.getAllBooks() |  | List of all "The Lord of the Rings" books |
| /book/:id | __package_import_name__.getOneBook(id: string) | ID required | Request one specific book |
| /book/:id/chapter | __package_import_name__.getOneBookChapters(id: string) | ID required | Request all chapters of one specific book |
| /movie | __package_import_name__.getAllMovies() | | List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies |
| /movie/:id | __package_import_name__.getOneMovie(id: string) | ID required. | Request one specific movie |
| /movie/:id/quote | __package_import_name__.getAllMovies() | ID required. | Request all movie quotes for one specific movie (only working for the LotR trilogy) |
| /character | __package_import_name__.getAllCharacters() | | List of characters including metadata like name, gender, realm, race and more |
| /character/:id | __package_import_name__.getOneCharacter(id: string) | ID required. | 
Request one specific character |
| /character/:id/quote | __package_import_name__.getOneCharacterQuotes(id: string) | ID required. | Request all movie quotes of one specific character |
| /quote | __package_import_name__.getAllQuotes() | | List of all movie quotes |
| /quote/:id | __package_import_name__.getOneQuote(id: string) | ID required. | Request one specific movie quote |
| /chapter | __package_import_name__.getAllChapters() | | List of all book chapters |
| /chapter/:id | __package_import_name__.getOneChapter() | ID required. | Request one specific book chapter |

## Testing
For testing you should clone this repo, run `npm install`, then run `API_KEY=__your_API_key__  npm test`.
There are five test suites, one for each entity.
