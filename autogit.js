// Declare an asynchronous task
async function connectToServer() {
  try {
    // Create the request object
    const url = "https://example.com/api";
    const options = {
      headers: {
        // Add any required headers here
      }
    };

    // Make the HTTP request using Fetch API
    const response = await fetch(url, options);
    
    // Check the response status
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response as JSON
    const data = await response.json();

    // Do further processing with the response data
    console.log(data);

  } catch (error) {
    console.error("Error: ", error);
  }
}

// Execute the asynchronous task
connectToServer();
