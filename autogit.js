const axios = require('axios');

// Make a GET request to a URL
axios.get('https://api.example.com/data')
  .then(response => {
    // Handle success response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

// Make a POST request with data
axios.post('https://api.example.com/data', {
    name: 'John Doe',
    age: 30
  })
  .then(response => {
    // Handle success response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });
npm install axios
