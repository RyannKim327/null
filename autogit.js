// Import the necessary libraries
const fetch = require('node-fetch');

// Define the URL of the API
const API_URL = 'https://api.example.com';

// Define the asynchronous function to connect to the API
async function connectToAPI() {
  try {
    // Perform the API request
    const response = await fetch(API_URL);
    
    // Parse the response as JSON
    const data = await response.json();

    // Process the retrieved data
    console.log(data);
  } catch (error) {
    console.error('Error connecting to API:', error);
  }
}

// Call the function to connect to the API
connectToAPI();
