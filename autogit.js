const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    // Handle data retrieval success
    console.log(response.data);
  })
  .catch(error => {
    // Handle data retrieval failure
    console.error(error);
  });
