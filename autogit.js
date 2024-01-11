const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(function (response) {
    console.log('Response:', response.data);
  })
  .catch(function (error) {
    console.log('Error:', error);
  });
