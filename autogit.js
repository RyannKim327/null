const axios = require('axios');

// Make a GET request to a URL
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle success, print the data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.log('Error:', error.message);
  });

// Make a POST request with data
axios.post('https://api.example.com/submit', { name: 'John', age: 25 })
  .then(response => {
    // Handle success, print the response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.log('Error:', error.message);
  });
