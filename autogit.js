// Example URL for fetching data
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data using Fetch API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Display the fetched data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.log('Error:', error);
  });
