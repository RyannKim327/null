const axios = require('axios');

// Define the URL endpoint you want to make a GET request to
const url = 'https://jsonplaceholder.typicode.com/posts';

// Make the HTTP GET request using Axios
axios.get(url)
  .then(response => {
    // Handle the response data
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
