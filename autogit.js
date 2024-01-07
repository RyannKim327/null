// Importing Axios library
const axios = require('axios');

// Function to make GET request using Axios
const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

// Usage example
fetchData('https://jsonplaceholder.typicode.com/posts/1');
