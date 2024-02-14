const apiUrl = 'https://api.example.com/api/endpoint';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data retrieved from the API
    console.log(data);
    // Perform further operations with the data
    // ...
  })
  .catch(error => {
    console.log('Error:', error);
    // Handle any errors that occurred during the API request
  });
