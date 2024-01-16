// API endpoint URL
const apiUrl = 'https://example.com/api/data';

// Fetch data using Fetch API
fetch(apiUrl)
  .then(response => response.json()) // Parse response as JSON
  .then(data => {
    // Do something with the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error('Error:', error);
  });
