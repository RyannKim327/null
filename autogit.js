// Import the required Axios library
const axios = require('axios');

// Define the API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API endpoint using Axios
axios.get(apiUrl)
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
