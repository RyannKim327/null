const axios = require('axios');

// Making a GET request
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

// Making a POST request
axios.post('https://api.example.com/data', { name: 'John', age: 30 })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
