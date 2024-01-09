const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    // Handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // Handle error
    console.log(error);
  });
