// Define the API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Make a GET request to the API endpoint
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Log the response data to the console
    console.log(data);
  })
  .catch(error => {
    // Log any errors to the console
    console.error('Error:', error);
  });
