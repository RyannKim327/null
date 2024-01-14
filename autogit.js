// Define an async task to connect to Android
function connectToAndroid() {
  return new Promise((resolve, reject) => {
    // Create an XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Define the request parameters
    xhr.open('GET', 'http://android-api-endpoint', true);

    // Set the response type to JSON
    xhr.responseType = 'json';

    // Handle the response
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // Connection successful
          resolve(xhr.response);
        } else {
          // Connection failed
          reject('Failed to connect to Android');
        }
      }
    };

    // Send the request
    xhr.send();
  });
}

// Usage
connectToAndroid()
  .then((response) => {
    console.log('Connected to Android:', response);
    // Perform further actions with the response
  })
  .catch((error) => {
    console.error(error);
    // Handle the connection error
  });
