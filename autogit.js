// Create a function to connect to the server using an asynchronous task
async function connectToServer() {
  try {
    // Make an asynchronous request to the server
    const response = await fetch('https://example.com/api/data');

    // Check if the request was successful
    if (response.ok) {
      // Parse the response data
      const data = await response.json();

      // Process the data here
      console.log(data);

    } else {
      // If the request was not successful, throw an error
      throw new Error('Request failed');
    }

  } catch (error) {
    // Handle any errors that occurred during the request
    console.error('Error:', error.message);
  }
}

// Call the connectToServer function to establish a connection
connectToServer();
