// Import the Axios library
const axios = require('axios');

// Define the URL endpoint you want to send the request to
const url = 'https://jsonplaceholder.typicode.com/posts/1';

// Send an HTTP GET request to the specified URL
axios.get(url)
  .then(response => {
    // Handle the response data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error.message);
  });
npm install axios
yarn add axios
