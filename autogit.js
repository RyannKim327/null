const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
