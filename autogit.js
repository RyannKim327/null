const axios = require('axios');

// Make a GET request to a JSON placeholder API
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
