const axios = require('axios');

// Function to make GET request using axios
async function requestData(url) {
  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
    // Do something with the response data
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Example usage
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
requestData(apiUrl);
