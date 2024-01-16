async function connectToServer() {
  try {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the request URL
    const url = 'http://example.com/api/endpoint';

    // Set the request method and URL
    xhr.open('GET', url);

    // Set the appropriate headers
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Send the request
    xhr.send();

    // Wait for the server response
    await new Promise((resolve, reject) => {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          // Request was successful
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } else {
          // Request failed
          reject(new Error(xhr.statusText));
        }
      };

      xhr.onerror = function () {
        // Request failed
        reject(new Error('Network error'));
      };
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the connectToServer() function
connectToServer();
