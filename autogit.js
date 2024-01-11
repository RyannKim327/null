const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(function (response) {
    // Handle the response data
    console.log(response.data);
  })
  .catch(function (error) {
    // Handle any errors that occurred during the request
    console.error(error);
  });
