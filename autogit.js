// Import the Axios library
const axios = require('axios');

// Define the endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to make a GET request using Axios
async function fetchData() {
  try {
    // Make a GET request to the API endpoint
    const response = await axios.get(apiUrl);
    
    // Print the response data to the console
    console.log(response.data);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error(error);
  }
}

// Call the fetchData function to retrieve data
fetchData();
