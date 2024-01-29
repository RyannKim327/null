const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
