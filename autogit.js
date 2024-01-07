const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
