// Import the Axios library
const axios = require('axios');

// Define the API endpoint URL
const apiUrl = 'https://api.example.com/';

// Make a GET request to the API
axios.get(apiUrl)
  .then(response => {
    // Handle the response data
    console.log('API Response:', response.data);
  })
  .catch(error => {
    // Handle the error
    console.error('Error:', error.message);
  });
npm install axios
yarn add axios
