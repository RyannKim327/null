const axios = require('axios');

// Make a GET request to a URL
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
