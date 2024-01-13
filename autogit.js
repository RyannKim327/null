// API endpoint URL
const apiUrl = 'https://api.example.com/data';

// Fetch data from the API
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Process the received data
    console.log(data);
  })
  .catch((error) => {
    // Handle any errors from the API request
    console.error('Error:', error);
  });
