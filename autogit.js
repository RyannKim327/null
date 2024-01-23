// Make a GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data returned from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.log('Error:', error);
  });
