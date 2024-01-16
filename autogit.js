async function connectToAPI() {
  try {
    // Create a new instance of the XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Open a GET request to the API endpoint
    xhr.open('GET', 'https://api.example.com/data', true);

    // Set the response type to JSON
    xhr.responseType = 'json';

    // Send the request
    xhr.send();

    // Wrap the request in a Promise
    return new Promise((resolve, reject) => {
      xhr.onreadystatechange = function() {
        // Check if the request is done and successful
        if (xhr.readyState === XMLHttpRequest.DONE) {
          // Check for a successful response status (200)
          if (xhr.status === 200) {
            // Resolve the Promise with the API response
            resolve(xhr.response);
          } else {
            // Reject the Promise with an error message
            reject('Error: Unable to connect to the API.');
          }
        }
      };
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage:
connectToAPI()
  .then(response => {
    console.log('API Response:', response);
    // Do something with the API response data
  })
  .catch(error => {
    console.error('API Error:', error);
    // Handle the API error
  });
