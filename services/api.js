const axios = require('axios').default;

exports.api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});