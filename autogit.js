const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    // Handle success
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error);
  });
