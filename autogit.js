const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle success
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.log('Error:', error.message);
  });
