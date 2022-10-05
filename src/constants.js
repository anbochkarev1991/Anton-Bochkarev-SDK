const API_URL = 'https://the-one-api.dev/v2';
const API_KEY = 'rCVh0lr4rJM2up1WE7Fg';

const config = {
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
};

module.exports = {
  API_URL,
  API_KEY,
  config,
}