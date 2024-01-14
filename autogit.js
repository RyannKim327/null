// Import necessary modules for making HTTP requests in JavaScript
const fetch = require('node-fetch');

// Define the async task function
async function connectAsyncTask() {
  try {
    // Make an HTTP GET request to a sample API endpoint
    const response = await fetch('https://api.example.com/data');

    // Parse the response as JSON
    const data = await response.json();

    // Log the data to the console
    console.log(data);

    // Perform further operations with the received data
    // ...
  } catch (error) {
    // Handle any errors that occur during the async task
    console.error('Error occurred:', error);
  }
}

// Call the async task function
connectAsyncTask();
