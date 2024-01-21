const axios = require('axios');

// API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to make an API request using Axios
async function fetchData() {
  try {
    const response = await axios.get(apiUrl);
    const data = response.data;
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// Call the function to fetch data
fetchData();
