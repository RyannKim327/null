// Importing Axios library
const axios = require('axios');

// Define the API endpoint URL
const apiUrl = 'https://api.example.com';

// Make a GET request
axios
  .get(apiUrl)
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });

// Make a POST request
const postData = {
  name: 'John Doe',
  email: 'john@example.com'
};

axios
  .post(apiUrl, postData)
  .then(response => {
    // Handle successful response
    console.log('Response data:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
