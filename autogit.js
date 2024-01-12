// Import the necessary dependencies
const axios = require('axios');

// Define the asynchronous function
async function fetchData() {
  try {
    // Make an asynchronous API request
    const response = await axios.get('https://api.example.com/data');
    
    // Handle the response data
    console.log(response.data);
    
    // Perform other operations with the data
    // ...
    
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error(error);
  }
}

// Invoke the fetchData function
fetchData();
