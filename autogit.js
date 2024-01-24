const axios = require('axios');

// Make a GET request to an API endpoint
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
