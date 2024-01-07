const axios = require('axios');

// Make a GET request to a specific API endpoint
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
