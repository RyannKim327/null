const axios = require('axios');

// Mock API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using Axios
axios.get(apiUrl)
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
