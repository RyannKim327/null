// Define the API endpoint URL
const apiUrl = 'https://api.example.com/data';

// Make a GET request to the API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the retrieved data
    console.log(data);
    // Do something with the data
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });
