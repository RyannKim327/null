const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
