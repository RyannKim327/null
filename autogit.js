const axios = require('axios');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(apiUrl)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
