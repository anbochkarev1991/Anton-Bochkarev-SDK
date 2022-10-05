# SDK for LOTR API

## Installation

npm install anton-bochkarev-sdk / yarn add anton-bochkarev-sdk

## Functionality

You can get information about books, movies and characters connected with LOTR universe. Also there are two entities connected with others: quotes and chapters;
Books API: getAllBooks, getOneBook (ID required), getOneBookChapters;
Chapters API: getAllChapters, getOneChapter (ID required);
Characters API: getAllCharacters, getOneCharacter (ID required), getOneCharacterQuotes (ID required);
Movies API: getAllMovies, getOneMovie (ID required);
Quotes API: getAllQuotes,  getOneQuote (ID required);


## Testing
For testing you should clone this repo, run `npm install` / `yarn`, then run `npm test`.
There are five test suites, one for each entity.
