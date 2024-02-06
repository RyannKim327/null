// Make an HTTP GET request to an API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Printing the response data to the console
    console.log(data);
  })
  .catch(error => {
    // Handling any errors
    console.log('Error:', error);
  });
