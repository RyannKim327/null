// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data);
    // Your code to handle the data goes here
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
